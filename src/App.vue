<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped>
#app {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    height: 100%;
    width: 100%;
}
</style>