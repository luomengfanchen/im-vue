<template>
    <div class="im-index">
        <!-- 好友列表 -->
        <imFriend></imFriend>
        <div class="v-layout">
            <imHeader></imHeader>
            <imChat></imChat>
            <imSend></imSend>
        </div>
    </div>
</template>

<script>
import imFriend from '@/components/imFriend.vue'
import imHeader from '@/components/imHeader.vue'
import imChat from '@/components/imChat.vue'
import imSend from '@/components/imSend.vue'

export default {
    name: 'Index',
    components: {
        imFriend,
        imHeader,
        imChat,
        imSend
    }
}
</script>

<style scoped>
.im-index {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}
.v-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
</style>
