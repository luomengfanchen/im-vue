<template>
    <header class="im-headbar">
        <a href="#" class="header-btn">个人信息</a>
        <a href="#" class="header-btn">添加好友</a>
        <a href="/logout" class="header-btn">退出登陆</a>
    </header>
</template>

<script>
export default {
    name: 'imHeader'
}
</script>

<style scoped>
.im-headbar {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    margin: 10px;
}
.header-btn {
    text-decoration: none;
}
</style>
