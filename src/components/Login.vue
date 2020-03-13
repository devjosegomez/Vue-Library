<template>
  <div class="row card-content valign center">
    <form class="">
      <div class="row">
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate" maxlength="27"> 
          <label for="email">Email</label>
        </div>

        <div class="row">
            <div class="input-field">
                 <i class="material-icons prefix">visibility_off</i>
                <input id="password" type="password">
                <label for="password">Password</label>
            </div>
        </div>

        <div class="row">
            <input type="submit" value="Login" class="btn center">
        </div>
      </div>
    </form>

    <h3>Not registered yet?</h3>
    <a href="">
        <router-link :to="{ name : 'Register'}"><h2>Create a new Account!</h2></router-link>
    </a>

  </div>
</template>

<script>
export default {
    name: 'Login.vue',
    data(){
        return {

        }
    },
    mounted(){
    M.AutoInit();
  }
}
</script>