<template>
<div class="row card-content valign center">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
            <input id="username" type="text" class="validate" maxlength="18">
            <label for="username">Username</label>
        </div>
        <div class="input-field col s6">
            <input id="phone" type="tel" class="validate" maxlength="18">
            <label for="phone">Phone number</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" maxlength="15">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" maxlength="15">
          <label for="last_name">Last Name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate" maxlength="27">
          <label for="email">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="password" type="password" class="validate" maxlength="27">
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

        }
    }
}
</script>