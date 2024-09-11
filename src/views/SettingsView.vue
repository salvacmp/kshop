<script setup>
import { ref } from 'vue';

// Create a reactive list to store the order items
const orderList = ref([]);

// Define the orderbasket function
function orderbasket(itemname) {
    orderList.value.push(itemname);
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col productlist">
                <div class="row">
                    <div class="col">
                        <div class="card" @click="orderbasket('Egg')" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Egg</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Chicken')" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Chicken</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" @click="orderbasket('Cola')" style="width: 18rem;">
                            <img src="../assets/img/logo.png" draggable="false" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">Cola</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col cart py-5">
                <div class="row text-center">
                    <h1>Order List</h1>
                </div>
                <hr>
                <div class="row">
                    <ul>
                        <!-- Use v-for to render order items -->
                        <li v-for="item in orderList" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart {
    max-width: 25%;
    min-height: 100vh;
}
</style>
