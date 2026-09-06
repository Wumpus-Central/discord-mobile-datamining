// === Module 1820: startScreenTransition ===

// Module 1820 (startScreenTransition)
import applyStyle from "applyStyle" /* 1821 */;
import computeEasingProgress from "computeEasingProgress" /* 1822 */;
import configureProps from "configureProps" /* 1735 */;

configureProps = configureProps.configureProps();
function startScreenTransition(sharedEvent) {
  closure_0 = sharedEvent;
  sharedEvent = sharedEvent.sharedEvent;
  sharedEvent.addListener(sharedEvent.stackTag, () => {
    applyStyle.applyStyle(closure_0, sharedEvent.value);
  });
}
let obj = { applyStyle: applyStyle.applyStyle };
startScreenTransition.__closure = obj;
startScreenTransition.__workletHash = 9428952089760;
startScreenTransition.__initData = { code: "function startScreenTransition_Pnpm_animationManagerTs1(screenTransitionConfig){const{applyStyle}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent}=screenTransitionConfig;sharedEvent.addListener(stackTag,function(){applyStyle(screenTransitionConfig,sharedEvent.value);});}" };
function getLockAxis(arg0) {
  const items = ["swipeRight", "swipeLeft", "horizontalSwipe"];
  let str = "x";
  if (!items.includes(arg0)) {
    const items1 = ["swipeUp", "swipeDown", "verticalSwipe"];
    let str2;
    if (items1.includes(arg0)) {
      str2 = "y";
    }
    str = str2;
  }
  return str;
}
getLockAxis.__closure = {};
getLockAxis.__workletHash = 16916946798878;
getLockAxis.__initData = { code: "function getLockAxis_Pnpm_animationManagerTs2(goBackGesture){if(['swipeRight','swipeLeft','horizontalSwipe'].includes(goBackGesture)){return'x';}else if(['swipeUp','swipeDown','verticalSwipe'].includes(goBackGesture)){return'y';}return undefined;}" };
function finishScreenTransition(stackTag) {
  ({ sharedEvent, goBackGesture } = stackTag);
  sharedEvent.removeListener(stackTag.stackTag);
  if (typeof getLockAxis === "function") {
    const items = ["swipeRight", "swipeLeft", "horizontalSwipe"];
    let str = "x";
    if (!items.includes(goBackGesture)) {
      const items1 = ["swipeUp", "swipeDown", "verticalSwipe"];
      let str2;
      if (items1.includes(goBackGesture)) {
        str2 = "y";
      }
      str = str2;
    }
    computeEasingProgress.getSwipeSimulator(sharedEvent.value, stackTag, str)();
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
obj = { getLockAxis, getSwipeSimulator: computeEasingProgress.getSwipeSimulator };
finishScreenTransition.__closure = obj;
finishScreenTransition.__workletHash = 6937010294861;
finishScreenTransition.__initData = { code: "function finishScreenTransition_Pnpm_animationManagerTs3(screenTransitionConfig){const{getLockAxis,getSwipeSimulator}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent,goBackGesture:goBackGesture}=screenTransitionConfig;sharedEvent.removeListener(stackTag);const lockAxis=getLockAxis(goBackGesture);const step=getSwipeSimulator(sharedEvent.value,screenTransitionConfig,lockAxis);step();}" };

export { startScreenTransition };
export { finishScreenTransition };