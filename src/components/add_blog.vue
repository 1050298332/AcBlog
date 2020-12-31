<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label>主题</label>
      <input type="text" v-model="blog.title" required />
      <label>内容</label>
       <!-- Two-way Data-Binding -->
        <quill-editor
          ref="myQuillEditor"
          v-model="blog.content"
        />
      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js"
        v-model="blog.categories"/>
        <label>Node.js</label>
        <input type="checkbox" value="Node.js"
        v-model="blog.categories"/>
        <label>React.js</label>
        <input type="checkbox" value="React.js"
        v-model="blog.categories"/>
        <label>Angular4.js</label>
        <input type="checkbox" value="Angular4.js"
        v-model="blog.categories"/>
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
         <option v-for="author in authors">
           {{author}}
         </option>
      </select>
      <button v-on:click.preven="post">添加博客</button>
    </form>
    <div v-if="submmited">
      <h3>博客发布成功!</h3>
    </div>
    <hr />
    <div id="preview">
      <h3>总览</h3>
      <p>主题: {{blog.title}}</p>
        <p>内容: </p>
          <p v-html="blog.content"></p>
      <p>分类</p>
      <ul>
        <li v-for="categories in blog.categories">
          {{categories}}
        </li>
      </ul>
      <p>作者: {{blog.author}}</p>
    </div>
  </div>

</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import { quillEditor } from 'vue-quill-editor'

  export default {
    components: {
      quillEditor
    },
    name: 'add-blog',
    data(){
      return {
        blog:{
          title:"",
          content:"",
          categories:[],
          author:""
        },
        authors:["Aclles","2mc","Nan_Xiang"],
        submmited: false
      }
     },
     methods:{
       submit () {
         console.log(this.$refs.text.value)
       },
       post: function(){
         this.$http.post("https://jsonplaceholder.typicode.com/posts",{
           title: this.blog.title,
           body: this.blog.content,
           userId:1
         })
            .then(function(data){
              console.log(data);
              this.submmited = true;
              });
       }
     }
   }
</script>

<style scoped>
  #add-blog{
    box-sizing: border-box;
    }
    #add-blog{
      margin: 20px auto;
      max-width: 600px;
      padding:20px;
    }
    label{
      display: block;
      margin: 20px 0 10px;
    }
    input[type="text"],textarea,select{
      display: block;
      width: 100%;
      padding: 8px;
    }
    #checkboxes label{
    display: inline-block;
      margin-top: 0;
    }
    #checkboxes input{
      display: inline-block;
      margin-right: 10px;
    }
button{
  display: block;
  margin: 20px auto;
  color: #a1e5e0;
  background: cornflowerblue;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  }
 #preview{
   padding: 10px 20px;
   border: 1px dotted #ccc;
   margin: 30px 0;
 }
 h3{
   margin-top: 10px;
 }
</style>
