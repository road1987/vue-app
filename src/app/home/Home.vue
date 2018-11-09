<template>
  <div class="home">

    <router-link to="questions" class="app">
      <div class="app-icon">
        <i class="fa fa-quora" aria-hidden="true"></i>
      </div>
      <div class="app-desc">
        问&答
      </div>
    </router-link>

    <router-link to="questions" class="app">
      <div class="app-icon">
        <i class="fa fa-list" aria-hidden="true"></i>
      </div>
      <div class="app-desc">
        待办
      </div>
    </router-link>

    <router-link to="questions" class="app action-add">
      <div class="app-icon">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </div>
      <div class="app-desc">
        添加
      </div>
    </router-link>
  </div>
</template>
 
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home page'
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  padding : 20px;
}

.app{
  border : 1px solid #dddddd;
  width : 80px;
  height : 80px;

  text-align : center;
  margin : 10px;
  padding : 10px 10px ;
  display : inline-block;
  text-decoration : none;
  color : #333333;

  &:hover {
    background : #eeeeee;
  }

  &.action-add{
    border : 1px dashed #dddddd;
  }

  .app-icon {
    font-size : 40px; 
  }
  
  .app-desc {
    font-size : 14px;
  }
}
</style>
