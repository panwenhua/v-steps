<template>
  <ul class="steps">
    <li
      :class="{active:i+1===current}"
      v-for="(step,i) in stepsList"
      :key="i"
      @click="onStepClick(i+1)"
    >
      <a>
        <slot name="step" :title="step" :current="i+1">
          <!-- 后备内容 -->
          {{step}}
        </slot>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Steps",
  methods: {
    onStepClick(index) {
      this.$emit("onStepClick", index);
    }
  },
  props: {
    current: Number,
    stepsList: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}

.steps {
  display: flex;
  width: 100%;
  counter-reset: flag;
}
.steps li {
  flex: 1;
  padding-right: 20px;
  transition: all 0.3s ease-in-out;
}

.steps li:last-child {
  padding-right: 0;
}

.steps li a {
  position: relative;
  cursor: pointer;
  height: 40px;
  transition: all 0.3s ease-in-out;
}

.steps li a:after {
  content: "";
  transition: all 0.3s ease-in-out;
}

.steps li:not(:first-child) a {
  margin-left: -20px;
}

.steps li:not(:last-child) a:after {
  position: absolute;
  top: 0px;
  right: -20px;
  width: 38px;
  height: 38px;
  transform: scale(0.76) rotate(45deg);
  background-color: #f6f6f6;
  border-radius: 0 5px 0 50px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  z-index: 1;
}

.steps li:not(:last-child) a:hover:after {
  background-color: #007bff;
}

.steps li a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: silver;
  background-color: #f6f6f6;
}

.steps li a:hover {
  background-color: #007bff;
  color: #fff;
}

.steps li.active a:after {
  background-color: #007bff;
}

.steps li.active a,
.steps li.active a:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
