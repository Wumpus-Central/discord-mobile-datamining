// === Module 5151: ScreenStack ===

// Module 5151 (ScreenStack)
import _modDef5152 from "module_5152" /* 5152 */;
import _mod5153 from "module_5153" /* 5153 */;
import _modDef5154 from "module_5154" /* 5154 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "nativeContainerStyle", "onFinishTransitioning", "children"];
const jsx = fn(21).jsx;

export default function ScreenStack(arg0) {
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture, nativeContainerStyle } = arg0);
  ({ transitionAnimation, onFinishTransitioning, children } = arg0);
  let current;
  if (screensRefs != null) {
    current = screensRefs.current;
  }
  if (current == null) {
    current = {};
  }
  const ref = noop.useRef(current);
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const context = noop.useContext(_mod5153.GHContext);
  const obj2 = {
    stackUseEffectCallback(ref1) {

    }
  };
  const ref1 = noop.useRef(null);
  const effect = noop.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  _modDef5152("GHWrapper" !== context.name && undefined !== goBackGesture, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  _modDef5152(undefined !== goBackGesture && null === ref && undefined === currentScreenId, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  const obj3 = { value: ref, children: null };
  const obj4 = {
    gestureDetectorBridge: noop.useRef({
      stackUseEffectCallback(ref1) {

      }
    }),
    goBackGesture,
    transitionAnimation,
    screenEdgeGesture: null,
    screensRefs: null,
    currentScreenId: null,
    children: null
  };
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  obj4.screenEdgeGesture = screenEdgeGesture;
  obj4.screensRefs = ref;
  obj4.currentScreenId = currentScreenId;
  const obj5 = {};
  const ref2 = noop.useRef({
    stackUseEffectCallback(ref1) {

    }
  });
  const tmp12 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp9 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const merged = Object.assign(tmp);
  let backgroundColor;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  obj5.nativeContainerBackgroundColor = backgroundColor;
  obj5.onFinishTransitioning = onFinishTransitioning;
  obj5.ref = ref1;
  obj5.children = children;
  obj4.children = jsx(_modDef5154, {});
  obj3.children = <context gestureDetectorBridge={noop.useRef({
    stackUseEffectCallback(ref1) {

    }
  })} goBackGesture={goBackGesture} transitionAnimation={transitionAnimation} screenEdgeGesture={null} screensRefs={null} currentScreenId={null}>{null}</context>;
  return jsx(_mod5153.RNSScreensRefContext.Provider, { value: ref, children: null });
};