<template>
  <div class="container">
    <div id="traffic-light">
      <div class="traffic-light__lamp red" :class="{'red-active':this.$route.name === 'red'}"></div>
      <div
        class="traffic-light__lamp yellow"
        :class="{'yellow-active':this.$route.name === 'yellow'}"
      ></div>
      <div class="traffic-light__lamp green" :class="{'green-active':this.$route.name === 'green'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrafficLight",
  data() {
    return {
      timer: null
    };
  },
  props: {
    delay: Number
  },
  computed: {
    getNextRoute() {
      switch (this.$route.name) {
        case "red":
          return "/yellow";
        case "yellow":
          return "/green";
        case "green":
          return "/red";
        default:
          return undefined;
      }
    }
  },
  created() {
    setTimeout(
      () => this.$router.push({ path: this.getNextRoute }),
      this.delay * 1000
    );
  },
  updated() {
    setTimeout(
      () => this.$router.push({ path: this.getNextRoute }),
      this.delay * 1000
    );
  }
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  height: 100vh;
}

#traffic-light {
  width: 140px;
  border-radius: 15px;
  height: 380px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: gray;
  z-index: -1;
}

.traffic-light__lamp {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}

.red {
  background-color: rgba(204, 50, 50, 0.5);
}

.red-active {
  background-color: rgb(204, 50, 50);
}

.yellow {
  background-color: rgba(231, 180, 22, 0.5);
}

.yellow-active {
  background-color: rgb(231, 180, 22);
}

.green {
  background-color: rgba(45, 201, 55, 0.5);
}

.green-active {
  background-color: rgb(45, 201, 55);
}
</style>