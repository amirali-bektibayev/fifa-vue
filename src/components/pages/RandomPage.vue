<template>
  <div class="random">
    <div class="random__box-wrapper">
      <random-box :club-image="firstClub.image"></random-box>
      <random-box :club-image="secondClub.image"></random-box>
    </div>
    <button @click="random">Random</button>
  </div>
</template>

<script>
import { ALL_CLUBS } from '../../data/clubs/all/all_clubs';
import RandomBox from '../random/RandomBox.vue';

export default {
  components: {
    RandomBox,
  },
  data() {
    return {
      allClubs: ALL_CLUBS,
      firstClub: {},
      secondClub: {},
    };
  },
  methods: {
    random() {
      this.firstClub =
        this.allClubs[Math.floor(Math.random() * this.allClubs.length)];
      this.secondClub =
        this.allClubs[Math.floor(Math.random() * this.allClubs.length)];
    },
  },
};
</script>

<style scoped>
.random {
  height: 100vh;
  background-image: url('../../../public/images/other/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.random__box-wrapper {
  width: 800px;
  display: flex;
  justify-content: space-between;
}
</style>