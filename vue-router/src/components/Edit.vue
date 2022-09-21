<template>
    <div class="container">
          <div class="card">
              <div class="card-header">
                  <h3>Edit User</h3>
              </div>
              <div class="card-body">
                  <form v-on:submit.prevent="updateUser">
                      <div class="form-group">
                          <label>User Name:</label>
                          <input type="text" class="form-control" v-model="User.name"/>
                      </div>
                      <div class="form-group">
                          <label>User email:</label>
                          <input type="text" class="form-control" v-model="User.email" />
                      </div>
                      <div class="form-group">
                          <input type="submit" class="btn btn-primary" value="Update User"/>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </template>
  <script>
  export default{
          data(){
              return{
                  User:{}
              }
          },

          created: function(){
              this.getUser();
          },

          methods: {
              getUser()
              {
                let uri = 'http://localhost:3000/users/:id/' + this.$route.params.id;
                  this.axios.get(uri).then((response) => {
                      this.User = response.data;
                  });
              },

              updateUser()
              {
                let uri = 'http://localhost:3000/users' + this.$route.params.id;
                  this.axios.post(uri, this.User).then((response) => {
                    this.$router.push({name: 'Index'});
                  });
              }
          }
      }
  </script>
