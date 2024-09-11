<template>
    <div class="container-fluid p-5">
        <div class="row">
            <div class="col productlist">
                <div class="row py-5">
                    <div class="col">
                        <div class="card" @click="orderbasket('Egg', 1.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Egg</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Chicken', 5.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Chicken</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Cola', 0.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Cola</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Cola 2', 0.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Cola 2</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col">
                        <div class="card" @click="orderbasket('Item A', 1.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item A</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Item B', 5.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item B</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Item C', 0.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item C</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Item Z', 0.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item Z</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col">
                        <div class="card" @click="orderbasket('Item D', 1.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item D</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Item E', 5.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item E</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Item F', 0.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item F</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Item X', 0.99)" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Item X</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- div for cart -->
            <div class="col cart py-5" v-if="orderItems.length > 0" >
                <div class="row text-center">
                    <h1>Order List</h1>
                </div>
                <hr>
                <div class="row">
                    <ul class="list-unstyled">
                        <li v-for="(item, index) in orderItems" :key="index">
                            <div class="row">
                                <div class="col">
                                    <h1 class="fs-2">{{ item.name }}</h1>
                                    <h6 class="fs-6">${{ item.price.toFixed(2) }}</h6>
                                </div>
                                <div class="col ">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <button @click="changeQuantity(index, -1)"
                                                class="btn btn-primary">-</button>
                                        </div>
                                        <div class="col">
                                            <input type="number" step="0.01" v-model.number="item.quantity"
                                                @change="validateQuantity(index)" class="form-control no-arrows" min="0.01" />
                                        </div>
                                        <div class="col">
                                            <button @click="changeQuantity(index, 1)" class="btn btn-primary">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <hr>
                    <h1 class="fs-3">Total: ${{ total.toFixed(2) }}</h1>
                </div>
                <div class="row justify-content-center py-2">
                    <button @click="submitOrder" class="btn btn-primary" style="max-width: 50%; min-height: 5vh;">Submit</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap Modal for Success Message -->
    <div class="modal" id="myModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content  text-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="successModalLabel">Success</h5>
                </div>
                <div class="modal-body">
                    <p>Your order has been submitted successfully!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const orderItems = ref([]);

function orderbasket(name, price) {
    const item = orderItems.value.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        orderItems.value.push({ name, price, quantity: 1 });
    }
}

function changeQuantity(index, amount) {
    const item = orderItems.value[index];
    item.quantity = parseFloat((item.quantity + amount).toFixed(2));
    if (item.quantity <= 0) {
        orderItems.value.splice(index, 1);
    }
}

function validateQuantity(index) {
    const item = orderItems.value[index];
    if (item.quantity < 0.01) {
        item.quantity = 0.01; // Ensure quantity is at least 0.01
    }
}

const total = computed(() =>
    orderItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

// Example using fetch
async function submitOrder(orderItems) {
    try {
        const response = await fetch('http://localhost:8080/api/submit_order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderItems }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}



</script>

<style scoped>
.cart {
    max-width: 25%;
    min-height: 100vh;
}

.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.no-arrows {
    -moz-appearance: textfield;
}
</style>