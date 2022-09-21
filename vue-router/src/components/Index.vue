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
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: user.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger"  v-on:click="deleteUser(user.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                users: []
            }
        },

        created: function()
        {
            this.getUsers();
        },

        methods: {
            fetchUsers()
            {
              let uri = 'http://localhost:3000/users';
              this.axios.get(uri).then((response) => {
                  this.Users = response.data;
              });
            },
            deleteUser(id)
            {
              let uri = 'http://localhost:3000/users/'+id;
              this.Users.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
