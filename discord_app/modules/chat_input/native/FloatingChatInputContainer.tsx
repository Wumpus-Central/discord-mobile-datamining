// === Module 14188: FloatingChatInputContainer ===

// Module 14188 (FloatingChatInputContainer)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5333 */;
import timing_timing from "timing/timing" /* 5378 */;
import timingPresets from "timingPresets" /* 5381 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function useKeyboardOpenPaddingStyle() {
  const token = require("useToken").useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  _require = token;
  let obj = require("useToken");
  [tmp5, importDefault] = sharedValue(noop.useState(() => {
    const KeyboardController = _undefined(1641).KeyboardController;
    const stateResult = KeyboardController.state();
    let num;
    if (stateResult != null) {
      num = stateResult.height;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0;
  }), 2);
  const effect = noop.useEffect(() => {
    const KeyboardEvents = _undefined(1641).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardWillShow", (height) => closure_1(height.height > 0));
    const KeyboardEvents2 = _undefined(1641).KeyboardEvents;
    closure_1 = KeyboardEvents2.addListener("keyboardDidShow", (height) => closure_1(height.height > 0));
    const KeyboardEvents3 = _undefined(1641).KeyboardEvents;
    dependencyMap = KeyboardEvents3.addListener("keyboardWillHide", () => closure_1(false));
    const KeyboardEvents4 = _undefined(1641).KeyboardEvents;
    closure_3 = KeyboardEvents4.addListener("keyboardDidHide", () => closure_1(false));
    return () => {
      closure_0.remove();
      closure_1.remove();
      closure_2.remove();
      closure_3.remove();
    };
  }, []);
  const tmp4 = sharedValue(noop.useState(() => {
    const KeyboardController = _undefined(1641).KeyboardController;
    const stateResult = KeyboardController.state();
    let num;
    if (stateResult != null) {
      num = stateResult.height;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0;
  }), 2);
  const obj3 = require("useKeyboardType");
  if (!tmp5) {
    tmp5 = true === obj3.useKeyboardContextForType(require("KeyboardTypes").KeyboardTypes.SYSTEM).keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== require("KeyboardTypes").KeyboardTypes.SYSTEM;
  }
  dependencyMap = tmp5;
  tmp7 = useKeyboardTypeDefault();
  let num = 0;
  if (tmp5) {
    num = token;
  }
  sharedValue = require("module_1652").useSharedValue(num);
  items = [tmp5, token, sharedValue];
  const effect1 = noop.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = c0;
    }
    const obj = timing_timing;
    const result = sharedValue.set(obj.withTiming(num, { duration: timingPresets.timingStandardDuration, easing }));
    const obj2 = { duration: timingPresets.timingStandardDuration, easing };
  }, items);
  const tmpResult = require("module_1652");
  const items1 = [closure_7, sharedValue];
  _require = undefined;
  [tmp10, tmp11] = items1;
  class FloatingChatInputContainerTsx1 {
    constructor() {
      obj = { paddingBottom: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp11];
  FloatingChatInputContainerTsx1.__closure = items2;
  FloatingChatInputContainerTsx1.__workletHash = 15122796628316;
  FloatingChatInputContainerTsx1.__initData = tmp10;
  return require("module_1652").useAnimatedStyle(FloatingChatInputContainerTsx1);
}
const jsx = fn(21).jsx;
const Easing = fn(1652).Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let closure_7 = { code: "(function FloatingChatInputContainerTsx1(){let[paddingSV]=this.__closure;return{paddingBottom:paddingSV.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  ({ style, onLayout, children } = arg0);
  const obj = { style: null, onLayout, children };
  items = [style, useKeyboardOpenPaddingStyle()];
  obj.style = items;
  return jsx(_modDef1652.View, { style: null, onLayout, children });
};
export { useKeyboardOpenPaddingStyle };