<template>
    <div class="im-chat">
        <main class="chatbar">
            <!-- 列表渲染所有聊天记录 -->
            <div class="msg" v-for="msg in chatlist" :key="msg.cId">
                <div class="reciveMsg" v-if="(msg.sendId != 13)">
                    <!-- 若不为自己发送的记录 -->
                    <p class="msg-msg">{{ msg.msg }}</p>
                </div>
                <div class="sendMsg" v-else>
                    <p class="msg-msg">{{ msg.msg }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'imChat',
    data() {
        return {
            chatlist: [
                { cId: 1001, sendId: 12, recvId: 13, msg: 'hello' },
                { cId: 1002, sendId: 12, recvId: 13, msg: 'hello' },
                { cId: 1003, sendId: 13, recvId: 12, msg: 'world' },
                { cId: 1004, sendId: 13, recvId: 12, msg: 'world' },
                { cId: 1005, sendId: 12, recvId: 13, msg: 'hello' },
                { cId: 1006, sendId: 12, recvId: 13, msg: 'hello' },
                { cId: 1007, sendId: 13, recvId: 12, msg: 'world' },
                { cId: 1008, sendId: 13, recvId: 12, msg: '你好' }
            ]
        }
    }
}
</script>

<style scoped>
.im-chat {
    height: 100%;
    margin: 10px;
}
.chatbar {
    background-color: white;
    border-radius: 10px;
    height: 100%;
    margin: 10px;
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
