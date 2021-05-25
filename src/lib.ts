import { VueConstructor } from 'vue';
import * as components from './components';

export default {
  install(Vue: VueConstructor): void {
    if ((this.install as any).installed) return;
    (this.install as any).installed = true;
    /* eslint-disable */
    Object.keys(components).forEach((n) => {
      /* @ts-ignore */
      const component = components[n];
      Vue.component(n, component as typeof Vue);
    });
    // TODO: Register mixins, directives and e.t.c
  },
};
