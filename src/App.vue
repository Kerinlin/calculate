<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url("./assets/bg4.jpg");
  background-size: contain;
  &:hover {
    cursor: url("./assets/defaultcur.png"), default;
  }
}
</style>
