<template>
  <div class="Terrain">
    <TerrainComponent />
  </div>
</template>

<script>
import TerrainComponent from "@/components/TerrainComponent.vue";

export default {
  name: "TerrainView",
  components: {
    TerrainComponent,
  },
};
</script>
