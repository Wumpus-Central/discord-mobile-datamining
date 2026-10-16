// _runtime/01800_AnimatedScrollView.js
import eulerToQuaternion from "01801_eulerToQuaternion.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_2 = ["scrollViewOffset"];
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1692);
let closure_5 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).ScrollView);
const module_1797 = fn(1797);

export const AnimatedScrollView = module_1797.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    animatedRef = eulerToQuaternion.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const scrollViewOffset1 = eulerToQuaternion.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
