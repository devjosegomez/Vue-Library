<template>
<div class="row card-content valign center">
    <h3>New book</h3>
    <form class="col s12" id="NewBook">
      <div class="row">
        <div class="input-field col s6">
          <input id="title" type="text" class="validate" maxlength="60">
          <label for="title">Book's title</label>
        </div>
        <div class="input-field col s6">
          <input id="author" type="text" class="validate" maxlength="50">
          <label for="author">Author</label>
        </div>
      </div>
      
      <div class="row">
        <div class="input-field col s4">
          <input id="publised" type="number" class="validate" min="1" max="9999">
          <label for="publised">Publised on (Year)</label>
        </div>
        <div class="input-field col s8">
            <select v-model="categories" multiple>
              <option value="" disabled selected>Categories</option>
              <option v-for="(category, i) in categories" :value="i" :key="i">
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
export default {
    name: 'NewBook',
    data (){
        return {
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
    }
}
</script>

<style scoped>
#NewBook{
    border: 1px solid black;
    margin: 20px 0px;
}
</style>