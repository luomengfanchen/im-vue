<template>
    <div class="im-chat">
        <main class="chatbar">
            <!-- 列表渲染所有聊天记录 -->
            <div class="msg" v-for="msg in $store.getters.getChatlist" :key="msg.Cid">
                <div class="reciveMsg" v-if="(msg.SendId != $store.getters.getUser.uid)">
                    <!-- 若不为自己发送的记录 -->
                    <p class="msg-msg">{{ msg.Msg }}</p>
                </div>
                <div class="sendMsg" v-else>
                    <p class="msg-msg">{{ msg.Msg }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'imChat',
}
</script>

<style scoped>
.im-chat {
    height: 70%;
    margin: 10px;
}
.chatbar {
    background-color: white;
    border-radius: 10px;
    height: 100%;
    margin: 10px;
    overflow: auto;
}
.msg {
    margin: 10px;
}
.reciveMsg {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
}
.sendMsg {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
}
.msg-msg {
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
}
.reciveMsg > .msg-msg {
    background-color: lightgreen;
}
.sendMsg > .msg-msg {
    background-color: lightgray;
}
</style>
