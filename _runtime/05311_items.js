// _runtime/05311_items.js
import closure_2 from "noop";
import noop from "noop";
import { jsx } from "jsxProd";

let c3;
let c4;
const require = arg1;
({ useImperativeHandle: c3, useRef: c4 } = noop);
let items = [...require("items").nativeViewProps, "onGestureHandlerEvent", "onGestureHandlerStateChange"];

export default function createNativeWrapper(displayName) {
  let closure_0 = displayName;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const forwardRefResult = React.forwardRef((enabled) => {
    let childProps;
    let gestureHandlerProps;
    const displayName = enabled;
    const keys = Object.keys(enabled);
    let obj = { gestureHandlerProps: null, childProps: null };
    obj = {};
    const merged = Object.assign(obj);
    obj[0] = obj;
    obj[1] = { enabled: enabled.enabled, hitSlop: enabled.hitSlop, testID: enabled.testID };
    const reduced = keys.reduce((gestureHandlerProps) => {
      if (outer1_6.includes(arg1)) {
        gestureHandlerProps.gestureHandlerProps[arg1] = enabled[arg1];
      } else {
        gestureHandlerProps.childProps[arg1] = enabled[arg1];
      }
      return gestureHandlerProps;
    }, obj);
    ({ gestureHandlerProps, childProps } = reduced);
    const tmp3 = outer1_4(null);
    obj = tmp3;
    const tmp4 = outer1_4(null);
    let closure_2 = tmp4;
    const items = [tmp3, tmp4];
    outer1_3(arg1, () => {
      let current = tmp4.current;
      current = null;
      if (tmp3.current) {
        current = null;
        if (current) {
          tmp.current.handlerTag = current.handlerTag;
          current = tmp.current;
        }
      }
      return current;
    }, items);
    obj = {};
    const merged1 = Object.assign(gestureHandlerProps);
    obj.ref = tmp4;
    const obj1 = {};
    const merged2 = Object.assign(childProps);
    obj1.ref = tmp3;
    obj.children = outer1_5(displayName, obj1);
    return outer1_5(displayName(obj[2]).NativeViewGestureHandler, obj);
  });
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
    let tmp3 = typeof displayName === "y";
    if (typeof displayName !== "__FORMATJS_LISTFORMAT_DATA__") {
      tmp3 = displayName;
    }
    str = tmp3;
  }
  if (!str) {
    str = "ComponentWrapper";
  }
  forwardRefResult.displayName = str;
  return forwardRefResult;
};