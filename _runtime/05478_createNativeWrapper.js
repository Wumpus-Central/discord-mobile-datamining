// _runtime/05478_createNativeWrapper.js
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import { useEffect } from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_2 = ["ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];

export default function createNativeWrapper(displayName) {
  const _require = displayName;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let Native = arg2;
  if (arg2 === undefined) {
    Native = _require(obj[3]).GestureDetectorType.Native;
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
      keys = Object.keys(outer1_3(displayName, Native));
      obj = { gestureHandlerProps: null, childProps: null };
      obj = {};
      merged = Object.assign(closure_1);
      obj[0] = obj;
      obj[1] = { enabled: displayName.enabled, hitSlop: displayName.hitSlop, testID: displayName.testID };
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
      useNativeGesture = nativeGesture;
      items = [, ];
      items[0] = nativeGesture;
      items[1] = onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER;
      tmp6 = outer1_4(() => { ... }, items);
      tmp7 = useNativeGesture;
      if (useNativeGesture === closure_0(closure_1[3]).GestureDetectorType.Intercepting) {
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
      obj1[1] = outer1_5(closure_0, obj2);
      return outer1_5(NativeDetector, obj1);
    }
  }
  ComponentWrapper.displayName = str;
  return ComponentWrapper;
};