import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2/promise';
import cors from 'cors';

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Allow all origins
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// MySQL connection
let db;
(async function initializeDatabase() {
    try {
        db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'kgroupshop'
        });
        console.log('Connected to MySQL database');
    } catch (err) {
        console.error('Error connecting to MySQL database:', err);
    }
})();

// API route to handle order submission
app.post('/api/submit_order', async (req, res) => {
    const { orderItems } = req.body;
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        return res.status(400).json({ message: 'No items to submit' });
    }
    try {
        // Insert each item into the transactions table
        for (const item of orderItems) {
            const query = 'INSERT INTO transactions (name, price, quantity) VALUES (?, ?, ?)';
            await db.query(query, [item.name, item.price, item.quantity]);
        }
        res.json({ message: 'Your order has been submitted successfully!' });
    } catch (err) {
        console.error('Error inserting item:', err);
        res.status(500).json({ message: 'There was an error processing the order' });
    }
});

// Example GET route to test CORS
app.get('/products/:id', (req, res) => {
    res.json({ msg: 'This is CORS-enabled for all origins!' });
});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
