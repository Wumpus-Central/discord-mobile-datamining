// === Module 1965: startScreenTransition ===

// Module 1965 (startScreenTransition)
import _mod1966 from "module_1966" /* 1966 */;
import computeEasingProgress from "computeEasingProgress" /* 1967 */;

let items = [{ code: "(function startScreenTransition_Pnpm_animationManagerTs1(screenTransitionConfig){let[applyStyle]=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent}=screenTransitionConfig;sharedEvent.addListener(stackTag,function(){applyStyle(screenTransitionConfig,sharedEvent.value);});})" }, _mod1966.applyStyle];
let c0;
[tmp2, tmp3] = items;
function startScreenTransition(sharedEvent) {
  sharedEvent = sharedEvent.sharedEvent;
  sharedEvent.addListener(sharedEvent.stackTag, () => {
    sharedEvent(closure_0, sharedEvent.value);
  });
}
let items1 = [tmp3];
startScreenTransition.__closure = items1;
startScreenTransition.__workletHash = 1769952570137;
startScreenTransition.__initData = tmp2;
const items2 = [{ code: "(function getLockAxis_Pnpm_animationManagerTs2(goBackGesture){if(['swipeRight','swipeLeft','horizontalSwipe'].includes(goBackGesture)){return'x';}else if(['swipeUp','swipeDown','verticalSwipe'].includes(goBackGesture)){return'y';}return undefined;})" }];
[tmp4] = items2;
function getLockAxis(arg0) {
  items = ["swipeRight", "swipeLeft", "horizontalSwipe"];
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
getLockAxis.__workletHash = 10944975953983;
getLockAxis.__initData = tmp4;
const items3 = [{ code: "(function finishScreenTransition_Pnpm_animationManagerTs3(screenTransitionConfig){let[getLockAxis,getSwipeSimulator]=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent,goBackGesture:goBackGesture}=screenTransitionConfig;sharedEvent.removeListener(stackTag);const lockAxis=getLockAxis(goBackGesture);const step=getSwipeSimulator(sharedEvent.value,screenTransitionConfig,lockAxis);step();})" }, getLockAxis, computeEasingProgress.getSwipeSimulator];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items3;
function finishScreenTransition(stackTag) {
  ({ sharedEvent, goBackGesture } = stackTag);
  sharedEvent.removeListener(stackTag.stackTag);
  duration(sharedEvent.value, stackTag, _undefined(goBackGesture))();
}
const items4 = [tmp6, tmp7];
finishScreenTransition.__closure = items4;
finishScreenTransition.__workletHash = 7933049368596;
finishScreenTransition.__initData = tmp5;

export { startScreenTransition };
export { finishScreenTransition };