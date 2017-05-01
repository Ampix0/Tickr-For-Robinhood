<template>
    <main>
       <div class="logoContainer">
           <h1>Tickr</h1>
       </div>
        <div class="loginFormContainer">
            <div class="loginForm">
                <input type="text" placeholder="Username" v-model="userLogin">
                <input type="password" placeholder="Password" v-model="userPass">
                <button class="btnLight" @click="login">Login</button>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'login-page',
        data: function() {
            return {
                userLogin: '',
                userPass: '',
            }
        },
        methods: {
            login: function() {
                this.axios.post('https://api.robinhood.com/api-token-auth/', {
                        username: this.userLogin,
                        password: this.userPass
                    })
                    .then((response) => {
                        this.$router.push({
                            name: 'home-page',
                            params: {
                                authKey: response.data.token
                            }
                        })
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            debug: function() {
                this.$router.push({
                    name: 'home-page'
                });
            }
        }
    }

</script>

<style lang="scss">
    @import "~global/global.scss";
    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-content: center;
        justify-content: center;
    }
    
    .loginFormContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        .loginForm {
            width: 30%;
            display: flex;
            flex-direction: column;
        }
    }

</style>
