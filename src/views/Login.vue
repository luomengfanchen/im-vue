<template>
    <div class="im-login">
        <form id="form">
            <div class="login-head">
                <h1>登 录</h1>
            </div>

            <div class="inputbox">
                <label for="email">邮箱</label>
                <input
                    type="email"
                    class="input"
                    placeholder="请输入邮箱"
                    v-model="email"
                />
            </div>

            <div class="input">
                <label for="passwd">密码</label>
                <input
                    type="password"
                    class="input"
                    placeholder="请输入密码"
                    v-model="password"
                />
            </div>

            <input type="button" value="登陆" id="submit" @click="login" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        login: function() {
            this.axios
                .post('/api/login?username=' + this.email + '&password=' + this.password)
                .then((response) => {
                    // 设置token
                    window.sessionStorage.setItem('token', response.data.data.token)
                    // 存储数据
                    this.$store.dispatch('asynctUser', response.data.data)
                    // 跳转到主页面
                    this.$router.push('/index')
                })
                .catch(() => {
                    alert('账号或密码输入错误')
                }
                )
        }
    }
}
</script>

<style scoped>
.im-login {
    align-items: center;
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
}

#form {
    background-color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px #000;
    display: flex;
    flex-direction: column;
    padding: 100px;
    text-align: center;
}
.login-head {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
}
.login-img {
    height: 50px;
    width: 50px;
    margin-right: 20px;
}
input {
    border: #eee solid 1px;
    border-radius: 10px;
    font-size: 20px;
    outline: none;
    padding: 10px;
    margin: 10px;
}
input:focus {
    border: #2575fc solid 1px;
    box-shadow: 0px 0px 10px 0px #6a11cb;
}
label {
    color: #000;
    font-size: 20px;
    padding: 10px;
}
.inputbox {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 10px;
}
#submit {
    color: #fff;
    background-color: #2575fc;
}
#submit:hover {
    border: #2575fc solid 1px;
    box-shadow: 0px 0px 10px 0px #6a11cb;
}
</style>
