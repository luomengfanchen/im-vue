<template>
    <div class="im-friend">
        <!--  自己的头像与姓名 -->
        <div class="userbox">
            <p class="nickname">{{ user.name }}</p>
        </div>
        <!--  列表渲染好友列表 -->
        <div class="friend-list" v-for="friend in friendList" :key="friend.id">
            <div class="friend" @click="chat(friend.id)">
                <div class="friend-name">
                    <p>{{ friend.name }}</p>
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
            user: {
                name: "MyUser"
            },
            friendList: [
                { id: 1, name: 'alpha' },
                { id: 2, name: 'beta' },
                { id: 3, name: 'aaa' }
            ]
        }
    },
    methods: {
        chat: (e) => {
            alert(e)
        }
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
