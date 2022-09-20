<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add User</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addUser">
                    <div class="form-group">
                        <label>User Name:</label>
                        <input type="text" class="form-control" v-model="User.name"/>
                    </div>
                    <div class="form-group">
                        <label>User email:</label>
                        <input type="text" class="form-control" v-model="User.email"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add User"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      name: 'AddUser'
  },
  data() {
      return {
          User: {}
      }
  },
  methods: {
      addUser() {
           let uri = 'http://localhost:3000/Users/add';
            this.axios.post(uri, this.User).then(response => {
                 this.$router.push({name: 'Index'});
            });
        }
    }
}
</script>