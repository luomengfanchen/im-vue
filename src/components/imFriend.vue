<template>
    <div class="im-friend">
        <!--  自己的头像与姓名 -->
        <div class="userbox">
            <p class="nickname">{{ $store.getters.getUser.name }}</p>
        </div>
        <!--  列表渲染好友列表 -->
        <div class="friend-list" v-for="friend in friendlist" :key="friend.Uid" @click="getMsg(friend.Uid)">
            <div class="friend">
                <div class="friend-name">
                    <p>{{ friend.Name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'imFriend',
    data() {
        return {
            friendlist: []
        }
    },
    methods : {
        getMsg : function (id) {
            this.axios
                .get('api/chatlist?uid=' + this.$store.getters.getUser.uid + '&fid=' + id)
                .then((response) => {
                    this.$store.dispatch('asyncFriend', id)
                    this.$store.dispatch('asyncChatlist', response.data.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.axios
            .get('api/friend?id=' + this.$store.getters.getUser.uid)
            .then((response) => {
                this.friendlist = response.data.data
                // 存储数据
                this.$store.dispatch('asyncFriendlist', response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style scoped>
.im-friend {
    background-color: white;
    border-radius: 10px;
    margin: 10px;
    width: 300px;
}
.userbox {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
}
.nickname {
    color: #426cfc;
    margin-top: 10px;
}
.friend-list {
    margin-top: 20px;
}
.friend {
    background-color: #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 5px 10px 5px 10px;
    margin-top: 5px;
}
.friend:hover {
    background-color: #2575fc11;
}
.friend-name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 200px;
}
.friend-name {
    color: #6a11cb;
}
</style>
