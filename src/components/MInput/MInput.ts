import Vue, { VNode } from 'vue';

export default Vue.extend({
  name: 'm-input',
  render(h): VNode {
    return h('input');
  },
});
