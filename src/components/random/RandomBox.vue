<template>
  <div
    :style="{ backgroundImage: `url('${clubImage}')` }"
    class="random__box"
  ></div>
</template>

<script>
export default {
  props: ['club-image'],
};
</script>

<style scoped>
.random__box {
  width: 300px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>