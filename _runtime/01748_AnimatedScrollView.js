import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import { jsx } from "jsxProd";
import createAnimatedComponent from "createAnimatedComponent";
import isReactRendering from "isReactRendering";

const require = arg1;
let closure_2 = ["scrollViewOffset"];
let closure_5 = createAnimatedComponent.createAnimatedComponent(require("get ActivityIndicator").ScrollView);

export const AnimatedScrollView = isReactRendering.componentWithRef((scrollViewOffset) => {
  let animatedRef = arg1;
  scrollViewOffset = scrollViewOffset.scrollViewOffset;
  const tmp2 = callback(scrollViewOffset, closure_2);
  if (null === arg1) {
    let obj = require(1749) /* useAnimatedGestureHandler */;
    animatedRef = obj.useAnimatedRef();
  }
  if (scrollViewOffset) {
    scrollViewOffset = require(1749) /* useAnimatedGestureHandler */.useScrollViewOffset(animatedRef, scrollViewOffset);
    const obj2 = require(1749) /* useAnimatedGestureHandler */;
  }
  if (!("scrollEventThrottle" in tmp2)) {
    tmp2.scrollEventThrottle = 1;
  }
  obj = { ref: animatedRef };
  const merged = Object.assign(tmp2);
  return <closure_5 ref={animatedRef} />;
});