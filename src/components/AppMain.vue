<script>
export default {
  name: "AppMain",
};
</script>

<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @include media-breakpoint-up(md) {
    color: green;
  }
}
</style>
