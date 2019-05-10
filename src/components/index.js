import Vue from "vue";
import Steps from "./Steps.vue";

const Components = {
    Steps,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;