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
                    name="email"
                    class="input"
                    placeholder="请输入邮箱"
                />
            </div>

            <div class="input">
                <label for="passwd">密码</label>
                <input
                    type="password"
                    name="passwd"
                    class="input"
                    placeholder="请输入密码"
                />
            </div>

            <input type="button" value="登陆" id="submit" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login'
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
