// _runtime/05750_ScreenStack.js
import Fragment from "react/00021_Fragment.js";
import warnOnceDefault from "05751_warnOnce.js";
import react2 from "05752_react.js";
import _modDef5753 from "metro/05753__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react from "00019_react.js";

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
const jsx = Fragment.jsx;

export default function ScreenStack(arg0) {
  let children;
  let currentScreenId;
  let goBackGesture;
  let nativeContainerStyle;
  let onFinishTransitioning;
  let screenEdgeGesture;
  let screensRefs;
  let transitionAnimation;
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture, nativeContainerStyle } = arg0);
  ({ transitionAnimation, onFinishTransitioning, children } = arg0);
  let current;
  const useRef = react.useRef;
  const tmp = _objectWithoutProperties(arg0, closure_3);
  if (screensRefs != null) {
    current = screensRefs.current;
  }
  if (current == null) {
    current = {};
  }
  const ref = useRef(current);
  const ref1 = react.useRef(null);
  const context = react.useContext(react2.GHContext);
  const obj2 = {
    stackUseEffectCallback(ref1) {},
  };
  const ref2 = react.useRef(obj2);
  const effect = react.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  const tmp9 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  warnOnceDefault(
    tmp9,
    "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.",
  );
  const tmp12 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  warnOnceDefault(tmp12, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  const Provider = react2.RNSScreensRefContext.Provider;
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  _modDef5753;
  const merged = Object.assign(tmp);
  let backgroundColor;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  return <Provider value={ref}>{null}</Provider>;
}
