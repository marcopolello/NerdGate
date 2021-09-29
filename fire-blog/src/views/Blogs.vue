<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
}
</script>

<style></style>
