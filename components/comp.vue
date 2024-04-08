<template>
  <div>
    {{data.attributes.date}}
    {{data.attributes.slug}}
    {{data.attributes.title}}
  </div>
</template>

<script setup lang="ts">
import type { Article } from "~/types/article";

defineProps<{
  data?: Article
}>()
</script>

<style scoped>

</style>