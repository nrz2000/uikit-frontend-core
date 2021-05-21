import {
  MountOptions,
  Wrapper,
} from '@vue/test-utils';
import MInput from '../MInput';

describe('MInput', () => {
  type Instance = InstanceType<typeof MInput>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;

  it('should render component and match snapshot', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
