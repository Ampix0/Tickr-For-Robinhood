<template>
  <div id="app">
      <transition name="fade">
          <router-view></router-view>
      </transition>
  </div>
</template>


<script>
    export default {}

</script>

<style lang="scss">
    @import url(https://fonts.googleapis.com/css?family=Lato:300);
    @import "~global/global.scss";
    * {
        margin: 0;
        padding: 0;
    }
    
    html,
    body {
        height: 100%;
    }
    
    body {
        color: $colorTextWhite;
        align-items: center;
        background-color: $colorGreen;
        background-position: center;
        display: flex;
        font-family: Lato, Helvetica, sans-serif;
        justify-content: center;
        text-align: center;
    }
    
    #app {
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }
    
    .fade-enter-active {
        transition-delay: .25s;
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

</style>
