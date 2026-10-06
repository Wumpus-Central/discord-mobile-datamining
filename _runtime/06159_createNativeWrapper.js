// _runtime/06159_createNativeWrapper.js
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import GestureDetectorType from "06160_GestureDetectorType.js";
import NativeDetector2 from "06202_NativeDetector.js";
import VirtualDetector from "06226_VirtualDetector.js";
import _mod6228 from "metro/06228__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";

const require = globalThis.__r;
let NativeDetector,
  _require,
  closure_0,
  closure_1,
  flag,
  items,
  keys,
  merged,
  merged1,
  nativeGesture,
  obj1,
  obj3,
  obj6,
  obj7,
  onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER,
  reduce,
  reduced,
  ref,
  tmp3,
  tmp6,
  tmp7;

let closure_2 = ["ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useEffect = react2.useEffect;
const jsx = Fragment.jsx;

export default function createNativeWrapper(displayName, arg1) {
  _require = displayName;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let Native = Intercepting;
  if (Intercepting === undefined) {
    const tmp = _require;
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
      ref = displayName.ref;
      keys = Object.keys(closure_3(displayName, closure_2));
      obj = { gestureHandlerProps: null, childProps: null };
      obj1 = {};
      reduce = keys.reduce;
      merged = Object.assign(closure_1);
      obj.gestureHandlerProps = obj1;
      obj.childProps = { enabled: displayName.enabled, hitSlop: displayName.hitSlop, testID: displayName.testID };
      reduced = reduce(() => {
        /* body not rendered: F137344 */
      }, obj);
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
      items = [,];
      items[0] = nativeGesture;
      items[1] = onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER;
      tmp6 = useEffect(() => {
        /* body not rendered: F137345 */
      }, items);
      tmp7 = Native;
      if (Native === closure_0(closure_1[3]).GestureDetectorType.Intercepting) {
        NativeDetector = tmp3(tmp4[3]).InterceptingGestureDetector;
      } else if (tmp7 === tmp3(tmp4[3]).GestureDetectorType.Virtual) {
        NativeDetector = tmp3(tmp4[6]).VirtualDetector;
      } else {
        NativeDetector = tmp3(tmp4[7]).NativeDetector;
      }
      obj6 = { gesture: nativeGesture, children: null };
      obj7 = {};
      merged1 = Object.assign(childProps);
      obj7.ref = ref;
      obj6.children = jsx(closure_0, obj7);
      return jsx(NativeDetector, obj6);
    }
  }
  ComponentWrapper.displayName = str;
  return ComponentWrapper;
}
