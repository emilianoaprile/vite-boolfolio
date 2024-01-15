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
    </div>
</template>
  
  
  <style lang="scss" scoped>
    .card.card-project {
      padding: 20px;
      border-radius: 8px;
      background: #dedede;
    }
  </style>