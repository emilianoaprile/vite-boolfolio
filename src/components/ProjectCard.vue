<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card card-project">
    <h3>{{ project.title }}</h3>
    <p v-if="project.type">{{ project.type.name }}</p>
    <router-link :to="{ name: 'project.show', params: { slug: project.slug } }">Details...</router-link>
  </div>
</template>
  
  
<style lang="scss" scoped>
.card.card-project {
  padding: 20px;
  border-radius: 8px;
  background: #dedede;
}
</style>