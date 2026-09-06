// _runtime/01778_AnimatedScrollView.js
import eulerToQuaternion from "01779_eulerToQuaternion.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_2 = ["scrollViewOffset"];
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1670);
let closure_5 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).ScrollView);
const module_1775 = fn(1775);

export const AnimatedScrollView = module_1775.componentWithRef((scrollViewOffset, arg1) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = _objectWithoutProperties(scrollViewOffset, closure_2);
  if (null === arg1) {
    let obj = eulerToQuaternion;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    scrollViewOffset = eulerToQuaternion.useScrollViewOffset(animatedRef, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  obj = { ref: animatedRef };
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});
