<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Create User</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="createUser">
                    <div class="form-group">
                        <label>User Name:</label>
                        <input type="text" class="form-control" v-model="User.name"/>
                    </div>
                    <div class="form-group">
                        <label>User email:</label>
                        <input type="text" class="form-control" v-model="User.email"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="createUser"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      name: 'createUser'
  },
  data() {
      return {
          User: {}
      }
  },
  methods: {
      createUser() {
           let uri = 'http://localhost:3000/createUser';
            this.axios.post(uri, this.User).then(response => {
                 this.$router.push({name: 'Index'});
            });
        }
    }
}
</script>