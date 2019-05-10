<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Steps :current="current" :stepsList="stepsList" @onStepClick="onStepClick">
      <template #step="{ title, current }">
        <span>{{icon[current-1]}}</span>
        <span>第{{current}}步骤:</span>
        {{ title }}
      </template>
    </Steps>
  </div>
</template>

<script>
import Steps from "./components/Steps.vue";

export default {
  name: "app",
  data() {
    return {
      current: 1,
      icon: ["😄", "🙂", "🔫", "😃", "😭"],
      stepsList: ["step1", "step2", "step3", "step4", "step5"]
    };
  },
  methods: {
    onStepClick(index) {
      this.current = index;
    }
  },
  components: {
    Steps
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
