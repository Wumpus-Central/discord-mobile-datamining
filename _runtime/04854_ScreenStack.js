// === Module 4854: ScreenStack ===

// Module 4854 (ScreenStack)
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_3 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "onFinishTransitioning", "children"];

export default function ScreenStack(arg0) {
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture } = arg0);
  ({ transitionAnimation, onFinishTransitioning, children } = arg0);
  let obj = React;
  let current;
  if (screensRefs != null) {
    current = screensRefs.current;
  }
  if (current == null) {
    current = {};
  }
  const ref = React.useRef(current);
  const ref1 = obj.useRef(null);
  const context = obj.useContext(ref1(4855).GHContext);
  obj = {
    stackUseEffectCallback(ref1) {

    }
  };
  const ref2 = obj.useRef(obj);
  const effect = obj.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  ref2(4839)("GHWrapper" !== context.name && undefined !== goBackGesture, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  ref2(4839)(undefined !== goBackGesture && null === ref && undefined === currentScreenId, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  obj = { value: ref, children: null };
  obj1 = { gestureDetectorBridge: ref2, goBackGesture, transitionAnimation, screenEdgeGesture: null, screensRefs: null, currentScreenId: null, children: null };
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  obj1[3] = screenEdgeGesture;
  obj1[4] = ref;
  obj1[5] = currentScreenId;
  const obj2 = {};
  const tmp = callback(arg0, closure_3);
  const tmp12 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp4 = ref1;
  const tmp9 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const merged = Object.assign(tmp);
  obj2.iosPreventReattachmentOfDismissedScreens = ref2(4843).experiment.iosPreventReattachmentOfDismissedScreens;
  obj2.onFinishTransitioning = onFinishTransitioning;
  obj2.ref = ref1;
  obj2.children = children;
  obj1[6] = jsx(ref2(4856), {});
  obj[1] = <context gestureDetectorBridge={ref2} goBackGesture={goBackGesture} transitionAnimation={transitionAnimation} screenEdgeGesture={null} screensRefs={null} currentScreenId={null}>{null}</context>;
  return jsx(tmp4(4855).RNSScreensRefContext.Provider, { value: ref, children: null });
};