<template>
  <div class="container my-5">
    <div class="row" style="border:2px solid #e0e0e0;border-radius : 7px; ">
      <div class="col-md-6 p-4 " style="background-color:#e0e0e0; margin:auto auto;">
        <h3>Enter your details here</h3>
        <form>
           <div class="form-group px-4" style="max-width:70%; margin-top:3px;">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="name"
              v-model="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style="align-self:center;"
            />
          </div>
          <div class="form-group px-4" style="max-width:70%; margin-top:3px;">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style="align-self:center;"
            />
          </div>
          <div class="form-group px-4"  style="max-width:70%;">
            <label for="exampleInputPassword1">Password</label>
            <input type="password"  v-model="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary" style="margin-left:30px;" v-on:click="addData">Submit</button>
        </form>
      </div>
      <div class="col-md-6 p-4 text-center" >
        <h3>Data</h3>
        <table style="border:2px solid #e0e0e0;border-radius : 7px; width:70%; height:60%; margin: 4px auto;">
          <tr style="background-color:#e0e0e0;">
            <th>Name</th>
            <th>Email Address</th>
             <th>Delete User</th>
          </tr>
          <tr v-for="(item,index) in resData" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td><button class="btn btn-danger" v-on:click="deleteData(item.id)">Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/config/firebase";
export default {
  name: "Front",
  components: {
  },
  data:()=>({
    name:'',
    email:'',
    password:'',
    resData:[]
  }),
  mounted(){
    this.showData()
  },
  methods:{
    
    deleteData(id){
      if(confirm('Are you sure?')){
        firebase.firestore.collection('users').doc(id).delete().then(()=>{
          alert('Removed Successfully')
          this.showData()
        }).catch(e=>{
          console.log(e)
        })
      }
    },
    showData(){
      this.resData = []
      firebase.firestore.collection('users').get().then(res=>{
        res.forEach(doc=>{
          let obj = doc.data()
          obj['id']=doc.id
          this.resData.push(obj)
         
        })
      }).catch(e=>{
        console.log(e)
      })
    },
    addData(){
      if( this.name.length>0 && this.email.length>0 && this.password.length>0 ){
        let obj={
          name:this.name,
          email: this.email,
          password:this.password,
          timestamp:new Date()
        }
       firebase.firestore.collection('users').add(obj).then(res=>{
          console.log(res)
          alert('Added')
          this.name=''
          this.email = ''
          this.password = ''
        }).catch(e=>{
          console.log(e)
        })
      }else{
        alert('Invalid Data')
      }
    }

  }
};
</script>

<style >
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 6px;
}

th {
  text-align: left;
}

table {
  border-spacing: 2px;
}
</style>
