<template>
  <div>
    <NuxtLayout>
      <IframeComponent />
    </NuxtLayout>
  </div>
</template>

<script>
import IframeComponent from '@/components/IframeComponent.vue';

export default {
  components: {
    IframeComponent,
  },
};
</script>
