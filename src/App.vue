<template lang="pug">
  #app
    #nav
      router-link(to="/")
        |Home
      |&nbsp;|&nbsp;
      router-link(to="/profile")
        |Profile
    keep-alive
        router-view
</template>

<script>
const axios = require('axios');
export default {
  name: 'app',
  mounted: function () {
    axios.get('http://f.code-on.be/d/19/04/tasks.json')
        .then(
            response => (
              this.$store.state.taskList = response.data
            ),
	          error => { alert(error) }

        )
        .catch(function() {
        }.bind(this));

    axios.get('http://f.code-on.be/d/19/04/owners.json')
        .then(
            response => (
              this.$store.state.userList = response.data
            ),
	          error => { alert(error) }
        )
        .catch(function() {
        }.bind(this));      
                
  }
};
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}









// transition styles

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}




.slide-left-enter-active, .slide-left-leave-active {
  transition: .5s;
  opacity: 1;
  transform: translateX(0%) scaleY(1);
}
.slide-left-enter, .slide-left-leave-to {
  transition: .5s;
  opacity: 0;
  transform: translateX(-100%) scaleY(0);
}

</style>
