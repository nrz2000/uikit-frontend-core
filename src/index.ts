import Vue from 'vue';
import * as components from './components';

function registerComponents() {
  /* eslint-disable */
  for (const key in components) {
    const component = components[key];
    Vue.component(key, component as typeof Vue);
  }
  /* eslint-disable */
}

export default () => {
  registerComponents();
  // TODO: Register mixins
};
