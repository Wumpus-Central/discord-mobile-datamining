// _runtime/05731_items.js
import noopAll from "00019_noop.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ useImperativeHandle: obj1, useRef: c3 } = noop);
let items = [...require("items").nativeViewProps, "onGestureHandlerEvent", "onGestureHandlerStateChange"];

export default function createNativeWrapper(displayName) {
  closure_0 = displayName;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
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
    let tmp2 = typeof displayName === "string";
    if (typeof displayName === "string") {
      tmp2 = displayName;
    }
    str = tmp2;
  }
  if (!str) {
    str = "ComponentWrapper";
  }
  class ComponentWrapper {
    constructor(arg0) {
      closure_0 = displayName;
      keys = Object.keys(displayName);
      obj = { gestureHandlerProps: null, childProps: null };
      obj = {};
      merged = Object.assign(closure_1);
      obj[0] = obj;
      obj[1] = { enabled: displayName.enabled, hitSlop: displayName.hitSlop, testID: displayName.testID };
      reduced = keys.reduce(() => { ... }, obj);
      ({ gestureHandlerProps, childProps } = reduced);
      tmp3 = closure_1_3(null);
      closure_1 = tmp3;
      tmp4 = closure_1_3(null);
      closure_2 = tmp4;
      items = [, ];
      items[0] = tmp3;
      items[1] = tmp4;
      tmp5 = closure_1_2(displayName.ref, () => { ... }, items);
      obj1 = {};
      merged1 = Object.assign(gestureHandlerProps);
      obj1.ref = tmp4;
      obj2 = {};
      merged2 = Object.assign(childProps);
      obj2.ref = tmp3;
      obj1.children = closure_1_4(closure_0, obj2);
      return closure_1_4(closure_0(closure_1[2]).NativeViewGestureHandler, obj1);
    }
  }
  ComponentWrapper.displayName = str;
  return ComponentWrapper;
};