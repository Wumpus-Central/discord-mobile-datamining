// _runtime/05239_ScreenStack.js
import _modDef5240 from "metro/05240__.js";
import _mod5241 from "metro/05241__.js";
import _modDef5242 from "metro/05242__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_3 = [
  "goBackGesture",
  "screensRefs",
  "currentScreenId",
  "transitionAnimation",
  "screenEdgeGesture",
  "nativeContainerStyle",
  "onFinishTransitioning",
  "children",
];
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
  const context = noop.useContext(_mod5241.GHContext);
  const obj2 = {
    stackUseEffectCallback(ref1) {},
  };
  const ref1 = noop.useRef(null);
  const effect = noop.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  _modDef5240(
    "GHWrapper" !== context.name && undefined !== goBackGesture,
    "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.",
  );
  _modDef5240(
    undefined !== goBackGesture && null === ref && undefined === currentScreenId,
    "Custom Screen Transition require screensRefs and currentScreenId to be provided.",
  );
  const obj3 = { value: ref, children: null };
  const obj4 = {
    gestureDetectorBridge: noop.useRef({
      stackUseEffectCallback(ref1) {},
    }),
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
  obj4.screenEdgeGesture = screenEdgeGesture;
  obj4.screensRefs = ref;
  obj4.currentScreenId = currentScreenId;
  const obj5 = {};
  const ref2 = noop.useRef({
    stackUseEffectCallback(ref1) {},
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
  obj4.children = jsx(_modDef5242, {});
  obj3.children = (
    <context
      gestureDetectorBridge={noop.useRef({
        stackUseEffectCallback(ref1) {},
      })}
      goBackGesture={goBackGesture}
      transitionAnimation={transitionAnimation}
      screenEdgeGesture={null}
      screensRefs={null}
      currentScreenId={null}
    >
      {null}
    </context>
  );
  return jsx(_mod5241.RNSScreensRefContext.Provider, { value: ref, children: null });
}
