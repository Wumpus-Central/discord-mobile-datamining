// === Module 6667: ? ===

// Module 6667
import GestureDetectorType from "GestureDetectorType" /* 6668 */;
import NativeDetector2 from "NativeDetector" /* 6710 */;
import VirtualDetector from "VirtualDetector" /* 6734 */;
import transformLongPressProps from "transformLongPressProps" /* 6736 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useEffect = fn(19).useEffect;
const jsx = fn(21).jsx;

export default function createNativeWrapper(displayName) {
  _require = displayName;
  if (gestureHandlerProps === undefined) {
    gestureHandlerProps = {};
  }
  let Native = Intercepting;
  if (Intercepting === undefined) {
    Native = require("GestureDetectorType").GestureDetectorType.Native;
  }
  let str;
  if (displayName != null) {
    str = displayName.displayName;
  }
  if (!str) {
    let name;
    if (displayName != null) {
      const render = displayName.render;
      if (render != null) {
        name = render.name;
      }
    }
    str = name;
  }
  if (!str) {
    let tmp4 = typeof displayName === "string";
    if (typeof displayName === "string") {
      tmp4 = displayName;
    }
    str = tmp4;
  }
  if (!str) {
    str = "ComponentWrapper";
  }
  class ComponentWrapper {
    constructor(arg0) {
      closure_0 = displayName;
      onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER = displayName.onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER;
      closure_1 = onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER;
      keys = Object.keys(closure_3(displayName, closure_2));
      obj = { gestureHandlerProps: null, childProps: null };
      obj = {};
      merged = Object.assign(closure_1);
      obj.gestureHandlerProps = obj;
      obj.childProps = { enabled: displayName.enabled, hitSlop: displayName.hitSlop, testID: displayName.testID };
      reduced = keys.reduce(() => { ... }, obj);
      ({ gestureHandlerProps, childProps } = reduced);
      if (undefined === gestureHandlerProps.disableReanimated) {
        flag = true;
        gestureHandlerProps.disableReanimated = true;
      }
      tmp3 = closure_0;
      tmp4 = closure_1;
      obj3 = closure_0(closure_1[5]);
      nativeGesture = obj3.useNativeGesture(gestureHandlerProps);
      closure_2 = nativeGesture;
      items = [, ];
      items[0] = nativeGesture;
      items[1] = onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER;
      tmp6 = useEffect(() => { ... }, items);
      tmp7 = Native;
      if (Native === closure_0(closure_1[3]).GestureDetectorType.Intercepting) {
        NativeDetector = tmp3(tmp4[3]).InterceptingGestureDetector;
      } else if (tmp7 === tmp3(tmp4[3]).GestureDetectorType.Virtual) {
        NativeDetector = tmp3(tmp4[6]).VirtualDetector;
      } else {
        NativeDetector = tmp3(tmp4[7]).NativeDetector;
      }
      obj1 = { gesture: nativeGesture, children: null };
      obj2 = {};
      merged1 = Object.assign(childProps);
      obj2.ref = displayName.ref;
      obj1.children = jsx(closure_0, obj2);
      return jsx(NativeDetector, obj1);
    }
  }
  ComponentWrapper.displayName = str;
  return ComponentWrapper;
};