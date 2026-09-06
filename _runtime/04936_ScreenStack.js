// === Module 4936: ScreenStack ===

// Module 4936 (ScreenStack)
import _modDef4921 from "module_4921" /* 4921 */;
import get_controlledBottomTabsDefault from "get controlledBottomTabs" /* 4925 */;
import _mod4937 from "module_4937" /* 4937 */;
import _modDef4938 from "module_4938" /* 4938 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "onFinishTransitioning", "children"];
const jsx = fn(21).jsx;

export default function ScreenStack(arg0) {
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture } = arg0);
  ({ transitionAnimation, onFinishTransitioning, children } = arg0);
  let obj = noop;
  let current;
  if (screensRefs != null) {
    current = screensRefs.current;
  }
  if (current == null) {
    current = {};
  }
  const ref = noop.useRef(current);
  const ref1 = obj.useRef(null);
  const context = obj.useContext(_mod4937.GHContext);
  obj = {
    stackUseEffectCallback(ref1) {

    }
  };
  const ref2 = obj.useRef(obj);
  const effect = obj.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  _modDef4921("GHWrapper" !== context.name && undefined !== goBackGesture, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  _modDef4921(undefined !== goBackGesture && null === ref && undefined === currentScreenId, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  obj = { value: ref, children: null };
  const obj1 = { gestureDetectorBridge: ref2, goBackGesture, transitionAnimation, screenEdgeGesture: null, screensRefs: null, currentScreenId: null, children: null };
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  obj1.screenEdgeGesture = screenEdgeGesture;
  obj1.screensRefs = ref;
  obj1.currentScreenId = currentScreenId;
  const obj2 = {};
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const tmp12 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp9 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const merged = Object.assign(tmp);
  obj2.iosPreventReattachmentOfDismissedScreens = get_controlledBottomTabsDefault.experiment.iosPreventReattachmentOfDismissedScreens;
  obj2.onFinishTransitioning = onFinishTransitioning;
  obj2.ref = ref1;
  obj2.children = children;
  obj1.children = jsx(_modDef4938, {});
  obj.children = <context gestureDetectorBridge={ref2} goBackGesture={goBackGesture} transitionAnimation={transitionAnimation} screenEdgeGesture={null} screensRefs={null} currentScreenId={null}>{null}</context>;
  return jsx(_mod4937.RNSScreensRefContext.Provider, { value: ref, children: null });
};