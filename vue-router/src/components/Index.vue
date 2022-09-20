<template>
    <div>
        <h1>Users</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>User Name</td>
                <td>User Email</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="User in Users" :key="User._id">
                    <td>{{ User._id }}</td>
                    <td>{{ User.name }}</td>
                    <td>{{ User.email }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: User._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger"  v-on:click="deleteUser(User._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                Users: []
            }
        },

        created: function()
        {
            this.fetchUsers();
        },

        methods: {
            fetchUsers()
            {
              let uri = 'http://localhost:3000/Users';
              this.axios.get(uri).then((response) => {
                  this.Users = response.data;
              });
            },
            deleteUser(id)
            {
              let uri = 'http://localhost:3000/Users/delete/'+id;
              this.Users.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
