// _runtime/04655_ScreenStack.js
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import { jsx } from "jsxProd";
import { context } from "04656_context.js";

const require = arg1;
let closure_4 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "onFinishTransitioning", "children"];

export default function ScreenStack(arg0) {
  let children;
  let currentScreenId;
  let goBackGesture;
  let onFinishTransitioning;
  let screenEdgeGesture;
  let screensRefs;
  let transitionAnimation;
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture, children } = arg0);
  ({ transitionAnimation, onFinishTransitioning } = arg0);
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
  let Children = obj.Children;
  const _require = Children.count(children);
  const context = obj.useContext(_context.GHContext);
  obj = {
    stackUseEffectCallback(ref1) {

    }
  };
  const ref2 = obj.useRef(obj);
  Children = obj.Children;
  const mapped = Children.map(children, (children) => {
    const props = children.props;
    let descriptor;
    if (props != null) {
      descriptor = props.descriptor;
    }
    if (descriptor == null) {
      let tmp2;
      if (props != null) {
        const descriptors = props.descriptors;
        if (descriptors != null) {
          tmp2 = descriptors[children.key];
        }
      }
      descriptor = tmp2;
    }
    let freezeOnBlur;
    if (descriptor != null) {
      const options = descriptor.options;
      if (options != null) {
        freezeOnBlur = options.freezeOnBlur;
      }
    }
    if (freezeOnBlur == null) {
      let obj = callback(outer1_3[5]);
      freezeOnBlur = obj.freezeEnabled();
    }
    const diff = callback - arg1;
    if ("nativeFabricUIManager" in ref1) {
      let tmp7 = diff > 2;
    } else {
      tmp7 = diff > 1;
    }
    if (freezeOnBlur) {
      freezeOnBlur = tmp7;
    }
    obj = { freeze: freezeOnBlur, children };
    return outer1_7(ref2(outer1_3[6]), obj);
  });
  const effect = obj.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  ref2(4640)("GHWrapper" !== context.name && undefined !== goBackGesture, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  ref2(4640)(undefined !== goBackGesture && null === ref && undefined === currentScreenId, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  obj = { value: ref, children: null };
  const obj1 = { gestureDetectorBridge: ref2, goBackGesture, transitionAnimation, screenEdgeGesture: null, screensRefs: null, currentScreenId: null, children: null };
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  obj1[3] = screenEdgeGesture;
  obj1[4] = ref;
  obj1[5] = currentScreenId;
  const obj2 = {};
  const tmp = callback(arg0, closure_4);
  const tmp10 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const tmp13 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp4 = _require;
  const merged = Object.assign(tmp);
  obj2.iosPreventReattachmentOfDismissedScreens = ref2(4644).experiment.iosPreventReattachmentOfDismissedScreens;
  obj2.onFinishTransitioning = onFinishTransitioning;
  obj2.ref = ref1;
  obj2.children = mapped;
  obj1[6] = jsx(ref2(4657), {});
  obj[1] = <context gestureDetectorBridge={ref2} goBackGesture={goBackGesture} transitionAnimation={transitionAnimation} screenEdgeGesture={null} screensRefs={null} currentScreenId={null}>{null}</context>;
  return jsx(tmp4(4656).RNSScreensRefContext.Provider, { value: ref, children: null });
};