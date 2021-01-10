<template>
  <h1>Hello world</h1>
</template>


<script>

  export default{
    mounted() {
      console.log("===========token=============")
      var token = localStorage.getItem('token')
      console.log(token)
    },
  }
</script>
