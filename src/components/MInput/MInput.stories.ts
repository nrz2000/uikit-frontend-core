import MInput from './MInput';

export default {
  title: 'Components/MInput',
  component: MInput,
};

export const Primary = () => ({
  components: { MInput },
  template: '<MInput type="text" />',
});
