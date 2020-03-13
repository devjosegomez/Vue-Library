<template>
    <div class="navbar main-nav disable-select">
        <nav class="nav-extended purple darken-2">
            <div class="nav-content">
                <router-link :to="{ name : 'Home'}">
                    <span class="nav-title">
                         <i class="material-icons">home</i>
                    </span>
                </router-link>

                <router-link :to="{ name : 'PickaParty'}">
                    <span class="nav-title">
                         <i class="material-icons">account_balance</i>
                    </span>
                </router-link>

                <router-link :to="{ name: 'Login'}">
                    <span class="nav-title">
                         <i class="material-icons">account_circle</i>
                    </span>
                </router-link>

                <a href="" class="btn-floating btn-large halfway-fab pink">
                    <router-link :to="{ name: 'NewBook'}"><i class="material-icons">add</i></router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar.vue',
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
.nav-content{
    display: grid;
    grid-template-columns: repeat(3, 4fr);
}

nav a{
    text-align: center;
}
</style>
