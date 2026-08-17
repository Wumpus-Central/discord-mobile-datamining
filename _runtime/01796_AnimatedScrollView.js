// _runtime/01796_AnimatedScrollView.js
import noopDefault from "00019_noop.js";
import useAnimatedGestureHandler from "01797_useAnimatedGestureHandler.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import { jsx } from "react/00021_jsxProd.js";
import createAnimatedComponent from "01688_createAnimatedComponent.js";
import isReactRendering from "01793_isReactRendering.js";

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