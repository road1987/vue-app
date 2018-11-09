<template src="./app.component.html">

</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      isShowSideMenu : false
    }
  },

  methods : {
    showSideMenu(){
      this.isShowSideMenu = true;
    },
    hideSideMenu(){
      this.isShowSideMenu = false;
    }
  }
}
</script>

<style lang="scss" src="./app.component.scss">
</style>
