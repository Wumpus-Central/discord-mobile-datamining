// _runtime/04936_ScreenStack.js
import _modDef4921 from "metro/04921__.js";
import get_controlledBottomTabsDefault from "04925_get_controlledBottomTabs.js";
import _mod4937 from "metro/04937__.js";
import _modDef4938 from "metro/04938__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_3 = [
  "goBackGesture",
  "screensRefs",
  "currentScreenId",
  "transitionAnimation",
  "screenEdgeGesture",
  "onFinishTransitioning",
  "children",
];
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
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const context = obj.useContext(_mod4937.GHContext);
  obj = {
    stackUseEffectCallback(ref1) {},
  };
  const ref1 = obj.useRef(null);
  const effect = obj.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  _modDef4921(
    "GHWrapper" !== context.name && undefined !== goBackGesture,
    "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.",
  );
  _modDef4921(
    undefined !== goBackGesture && null === ref && undefined === currentScreenId,
    "Custom Screen Transition require screensRefs and currentScreenId to be provided.",
  );
  obj = { value: ref, children: null };
  const obj1 = {
    gestureDetectorBridge: obj.useRef(obj),
    goBackGesture,
    transitionAnimation,
    screenEdgeGesture: null,
    screensRefs: null,
    currentScreenId: null,
    children: null,
  };
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  obj1.screenEdgeGesture = screenEdgeGesture;
  obj1.screensRefs = ref;
  obj1.currentScreenId = currentScreenId;
  const obj2 = {};
  const ref2 = obj.useRef(obj);
  const tmp12 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp9 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const merged = Object.assign(tmp);
  obj2.iosPreventReattachmentOfDismissedScreens =
    get_controlledBottomTabsDefault.experiment.iosPreventReattachmentOfDismissedScreens;
  obj2.onFinishTransitioning = onFinishTransitioning;
  obj2.ref = ref1;
  obj2.children = children;
  obj1.children = jsx(_modDef4938, {});
  obj.children = (
    <context
      gestureDetectorBridge={obj.useRef(obj)}
      goBackGesture={goBackGesture}
      transitionAnimation={transitionAnimation}
      screenEdgeGesture={null}
      screensRefs={null}
      currentScreenId={null}
    >
      {null}
    </context>
  );
  return jsx(_mod4937.RNSScreensRefContext.Provider, { value: ref, children: null });
}
