<template>
<div class="row card-content valign center">
    <h3>New book</h3>
    <form class="col s12" id="NewBook" @submit="formSubmit">
      <div class="row">
        <div class="input-field col s6">
          <input id="title" type="text" class="validate" maxlength="60" v-model="title">
          <label for="title">Book's title</label>
        </div>
        <div class="input-field col s6">
          <input id="author" type="text" class="validate" maxlength="50"  v-model="author">
          <label for="author">Author</label>
        </div>
      </div>
      
      <div class="row">
        <div class="input-field col s4">
          <input id="publisedDate" type="number" class="validate" min="1" max="9999"  v-model="publisedDate">
          <label for="publisedDate">Publised on (Year)</label>
        </div>
        <div class="input-field col s8">
            <select v-model="categories" multiple id="categories">
              <option value="" disabled>Categories</option>
              <option v-for="(category, i) in categories" :key="i" :value="category">
                {{category}}
              </option>
            </select>
        </div>

        <input type="submit" value="Save book" class="btn-large">
      </div>
    </form>
</div>
</template>

<script>
const $ = require('jquery')
window.$ = $

export default {
    name: 'NewBook',
    data (){
        return {
          title: '',
          author: '',
          publisedDate: '',
          selectedCategories: [],
          success: false,
          categories: 
          [
            "Action and Adventure",
            "Anthology",
            "Classic",
            "Comic and Graphic Novel",
            "Crime and Detective",
            "Drama",
            "Fable",
            "Fairy Tale",
            "Fan-Fiction",
            "Fantasy",
            "Historical Fiction",
            "Horror",
            "Humor",
            "Legend",
            "Magical Realism",
            "Mystery",
            "Mythology",
            "Realistic Fiction",
            "Romance",
            "Satire",
            "Science Fiction (Sci-Fi)",
            "Short Story",
            "Suspense/Thriller",
          ]
        }
    },
    mounted(){
    M.AutoInit();
    },
    methods: {
          formSubmit(e) {
              e.preventDefault();
              let currentObj = this;
              this.axios.post('http://localhost:3000/book', {
                name: this.title,
                author: this.author,
                publisedDate: this.publisedDate,
                category: ["Drama", "Test"]
              })
              .then(function (response) {
                  currentObj.output = response.data;
                  this.success = true
              })
              .catch(function (error) {
                currentObj.output = error;
              });
            }
        }
}
</script>

<style scoped>
#NewBook{
    border: 1px solid black;
    margin: 20px 0px;
}
</style>