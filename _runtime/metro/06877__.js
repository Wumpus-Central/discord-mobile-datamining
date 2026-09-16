// _runtime/metro/06877__.js
import nativeViewGestureHandlerProps from "../06805_nativeViewGestureHandlerProps.js";
import "module_19";

require = fn;
const noop = fn(19);
({ useImperativeHandle: c2, useRef: c3 } = noop);
const jsx = fn(21).jsx;
let items = [...fn(6805).nativeViewProps, "onGestureHandlerEvent", "onGestureHandlerStateChange"];

export default function createNativeWrapper(displayName, arg1) {
  _require = displayName;
  if (arg1 === undefined) {
    let obj = {};
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
      obj1 = {};
      merged = Object.assign(closure_1);
      obj.gestureHandlerProps = obj1;
      obj.childProps = { enabled: displayName.enabled, hitSlop: displayName.hitSlop, testID: displayName.testID };
      reduced = keys.reduce(() => { ... }, obj);
      ({ gestureHandlerProps, childProps } = reduced);
      tmp3 = useRef(null);
      closure_1 = tmp3;
      tmp4 = useRef(null);
      closure_2 = tmp4;
      items = [, ];
      items[0] = tmp3;
      items[1] = tmp4;
      tmp5 = useImperativeHandle(displayName.ref, () => { ... }, items);
      obj5 = {};
      merged1 = Object.assign(gestureHandlerProps);
      obj5.ref = tmp4;
      obj6 = {};
      merged2 = Object.assign(childProps);
      obj6.ref = tmp3;
      obj5.children = jsx(closure_0, obj6);
      return jsx(closure_0(closure_1[2]).NativeViewGestureHandler, obj5);
    }
  }
  ComponentWrapper.displayName = str;
  return ComponentWrapper;
};