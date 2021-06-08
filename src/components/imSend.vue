<template>
    <div class="im-send">
        <div class="sendbar">
            <input type="text" name="input" class="send-input" />
            <input type="button" class="send-btn" value="发送" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'imSend'
}
</script>

<style scoped>
.sendbar {
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    margin: 10px;
}
.send-input {
    background-color: #FFF;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    height: 50px;
    outline: none;
    text-align: center;
    width: 100%;
}
.send-btn {
    background-color: #5526DD;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    height: 50px;
    margin-left: 10px;
    outline: none;
    width: 120px;
}
</style>
