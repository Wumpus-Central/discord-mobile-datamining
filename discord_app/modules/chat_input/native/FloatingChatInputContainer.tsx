// discord_app/modules/chat_input/native/FloatingChatInputContainer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1655 from "../../../../_runtime/metro/01655__.js";
import useKeyboardTypeDefault from "../../keyboard/native/useKeyboardType.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function useKeyboardOpenPaddingStyle() {
  const token = require("useToken").useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  _require = token;
  let obj = require("useToken");
  [tmp5, importDefault] = sharedValue(
    noop.useState(() => {
      const KeyboardController = _undefined(1644).KeyboardController;
      const stateResult = KeyboardController.state();
      let num;
      if (stateResult != null) {
        num = stateResult.height;
      }
      if (num == null) {
        num = 0;
      }
      return num > 0;
    }),
    2,
  );
  const effect = noop.useEffect(() => {
    const KeyboardEvents = _undefined(1644).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardWillShow", (height) => closure_1(height.height > 0));
    const KeyboardEvents2 = _undefined(1644).KeyboardEvents;
    closure_1 = KeyboardEvents2.addListener("keyboardDidShow", (height) => closure_1(height.height > 0));
    const KeyboardEvents3 = _undefined(1644).KeyboardEvents;
    dependencyMap = KeyboardEvents3.addListener("keyboardWillHide", () => closure_1(false));
    const KeyboardEvents4 = _undefined(1644).KeyboardEvents;
    closure_3 = KeyboardEvents4.addListener("keyboardDidHide", () => closure_1(false));
    return () => {
      closure_0.remove();
      closure_1.remove();
      closure_2.remove();
      closure_3.remove();
    };
  }, []);
  const tmp4 = sharedValue(
    noop.useState(() => {
      const KeyboardController = _undefined(1644).KeyboardController;
      const stateResult = KeyboardController.state();
      let num;
      if (stateResult != null) {
        num = stateResult.height;
      }
      if (num == null) {
        num = 0;
      }
      return num > 0;
    }),
    2,
  );
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
  sharedValue = require("../../../../_runtime/metro/01655__.js").useSharedValue(num);
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
  const tmpResult = require("../../../../_runtime/metro/01655__.js");
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
  return require("../../../../_runtime/metro/01655__.js").useAnimatedStyle(FloatingChatInputContainerTsx1);
}
const jsx = fn(21).jsx;
const Easing = fn(1655).Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let closure_7 = {
  code: "(function FloatingChatInputContainerTsx1(){let[paddingSV]=this.__closure;return{paddingBottom:paddingSV.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  ({ style, onLayout, children } = arg0);
  const obj = { style: null, onLayout, children };
  items = [style, useKeyboardOpenPaddingStyle()];
  obj.style = items;
  return jsx(_modDef1655.View, { style: null, onLayout, children });
}
export { useKeyboardOpenPaddingStyle };
