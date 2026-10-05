// _runtime/01827_startScreenTransition.js
import applyStyleForBelowTopScreen from "01828_applyStyleForBelowTopScreen.js";
import _mod1829 from "metro/01829__.js";
import configureProps_mod from "01742_configureProps.js";

let configureProps = configureProps_mod;
configureProps = configureProps.configureProps();
function startScreenTransition(sharedEvent) {
  let closure_0 = sharedEvent;
  sharedEvent = sharedEvent.sharedEvent;
  sharedEvent.addListener(sharedEvent.stackTag, () => {
    const obj = applyStyleForBelowTopScreen;
    obj.applyStyle(closure_0, sharedEvent.value);
  });
}
let obj = { applyStyle: applyStyleForBelowTopScreen.applyStyle };
startScreenTransition.__closure = obj;
startScreenTransition.__workletHash = 9428952089760;
startScreenTransition.__initData = {
  code: "function startScreenTransition_Pnpm_animationManagerTs1(screenTransitionConfig){const{applyStyle}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent}=screenTransitionConfig;sharedEvent.addListener(stackTag,function(){applyStyle(screenTransitionConfig,sharedEvent.value);});}",
};
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
getLockAxis.__initData = {
  code: "function getLockAxis_Pnpm_animationManagerTs2(goBackGesture){if(['swipeRight','swipeLeft','horizontalSwipe'].includes(goBackGesture)){return'x';}else if(['swipeUp','swipeDown','verticalSwipe'].includes(goBackGesture)){return'y';}return undefined;}",
};
function finishScreenTransition(stackTag) {
  let goBackGesture;
  let sharedEvent;
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
    const obj = _mod1829;
    obj.getSwipeSimulator(sharedEvent.value, stackTag, str)();
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
finishScreenTransition.__closure = { getLockAxis, getSwipeSimulator: _mod1829.getSwipeSimulator };
finishScreenTransition.__workletHash = 6937010294861;
finishScreenTransition.__initData = {
  code: "function finishScreenTransition_Pnpm_animationManagerTs3(screenTransitionConfig){const{getLockAxis,getSwipeSimulator}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent,goBackGesture:goBackGesture}=screenTransitionConfig;sharedEvent.removeListener(stackTag);const lockAxis=getLockAxis(goBackGesture);const step=getSwipeSimulator(sharedEvent.value,screenTransitionConfig,lockAxis);step();}",
};
({ getLockAxis, getSwipeSimulator: _mod1829.getSwipeSimulator });

export { startScreenTransition };
export { finishScreenTransition };
