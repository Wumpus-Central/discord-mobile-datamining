// === Module 1795: AnimatedScrollView ===

// Module 1795 (AnimatedScrollView)
import noopDefault from "noop" /* 19 */;
import useAnimatedGestureHandler from "useAnimatedGestureHandler" /* 1796 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import { jsx } from "jsxProd" /* 21 */;
import createAnimatedComponent from "createAnimatedComponent" /* 1687 */;
import isReactRendering from "isReactRendering" /* 1792 */;

require = arg1;
let closure_2 = ["scrollViewOffset"];
noopDefault;
let closure_5 = createAnimatedComponent.createAnimatedComponent(require("get ActivityIndicator").ScrollView);

export const AnimatedScrollView = isReactRendering.componentWithRef((scrollViewOffset) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = callback(scrollViewOffset, closure_2);
  if (null === arg1) {
    let obj = useAnimatedGestureHandler;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    scrollViewOffset = useAnimatedGestureHandler.useScrollViewOffset(animatedRef, scrollViewOffset);
    const obj2 = useAnimatedGestureHandler;
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  obj = { ref: animatedRef };
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});