<template>
  <div class="hello">
    <div id="nav">
      <router-link style="color: #42b983;" to="/admin">Admin</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

