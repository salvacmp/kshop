<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body p-0 m-0  " data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand me-auto" href="#"><img src="../assets/img/logo.png" alt="logo" height="45vh"
                    class="a-inline-block align-text-center">{{title}}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav text-end">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <router-link class="nav-link" to="/transaction">Transaction</router-link>
                    <router-link class="nav-link" to="/supply">Supply</router-link>
                    <router-link class="nav-link" to="/settings">Settings</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default{
    data(){
        return{
            title: "Kana Labs"
        }
    }
}

</script>

<style scoped>

.a-inline-block{
 padding-left: 10vw;   
}

.navbar-nav{
    padding-right: 10vw;
}

@media (max-width: 600px) {
    .a-inline-block{
        padding-left: 0;
    }
    .navbar-nav{
        padding-right: 0;
    }
}
</style>