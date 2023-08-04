<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click = "$event => titleState.changeTitle('Hello Nuxt3!')">change Title</button>
  </div>
</template>
<script setup>
  const titleState = useTitle()
  const { title } = titleState
</script>
