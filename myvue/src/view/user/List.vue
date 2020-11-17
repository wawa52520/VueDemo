<template>
  <div>
    <h1>用户列表</h1>
    {{id}}
  </div>
</template>

<script>
  export default {
    name: "UserList",
    props: ['id'],
    beforeRouteEnter: (to, from, next) => {
      console.log('之前')
      next(vm => {
        vm.getData1();
      })
    },
    methods: {
      getData1: function () {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/mock/data.json'
        }).then(function (response) {
          console.log(response)
        })
      }
    }
  }
</script>

<style scoped>

</style>
