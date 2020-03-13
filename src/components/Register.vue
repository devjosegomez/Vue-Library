<template>
<div class="row card-content valign center">
    <form class="col s12" @submit="formSubmit">
      <div class="row">
        <div class="input-field col s6">
            <input id="username" type="text" class="validate" maxlength="18" v-model="username">
            <label for="username">Username</label>
        </div>
        <div class="input-field col s6">
            <input id="phone" type="tel" class="validate" maxlength="18" v-model="phone">
            <label for="phone">Phone number</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" maxlength="15" v-model="name">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" maxlength="15" v-model="lastName">
          <label for="last_name">Last Name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate" maxlength="27" v-model="email">
          <label for="email">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="password" type="password" class="validate" maxlength="27" v-model="password">
          <label for="password">Password</label>
        </div>
      </div>
      
      <input type="submit" value="Register" class="btn-large">
    </form>
</div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        return {
          "username": "",
          "email": "",
          "password": "",
          "name": "",
          "lastName": "",
          "phone": ""
        }
    },
    methods: {
          formSubmit(e) {
              e.preventDefault();
              let currentObj = this;
              this.axios.post('http://localhost:3000/users', {
                "username": this.username,
                "email": this.email,
                "password": this.password,
                "name": this.name,
                "lastName": this.lastName,
                "phone": this.phone
              })
              .then(function (response) {
                  currentObj.output = response.data;
                  this.$route.router.go('/Login')
              })
              .catch(function (error) {
                currentObj.output = error;
              });
            }
        }
}
</script>