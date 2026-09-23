// discord_app/modules/chat_input/native/FloatingChatInputContainer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import useKeyboardTypeDefault from "../../keyboard/native/useKeyboardType.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function useKeyboardOpenPaddingStyle() {
  token = token(4524).useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  let obj = token(4524);
  [tmp5, importDefault] = sharedValue(
    noop.useState(() => {
      const KeyboardController = token(1626).KeyboardController;
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
    const KeyboardEvents = token(1626).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => closure_1(true));
    const KeyboardEvents2 = token(1626).KeyboardEvents;
    closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => closure_1(false));
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, []);
  const tmp4 = sharedValue(
    noop.useState(() => {
      const KeyboardController = token(1626).KeyboardController;
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
  const obj3 = token(4695);
  if (!tmp5) {
    tmp5 = true === obj3.useKeyboardContextForType(token(1610).KeyboardTypes.SYSTEM).keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== token(1610).KeyboardTypes.SYSTEM;
  }
  dependencyMap = tmp5;
  tmp7 = useKeyboardTypeDefault();
  let num = 0;
  if (tmp5) {
    num = token;
  }
  sharedValue = token(4559).useSharedValue(num);
  const items = [tmp5, token, sharedValue];
  const effect1 = noop.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = token;
    }
    const obj = timing;
    const result = sharedValue.set(obj.withTiming(num, { duration: timingPresets.timingStandardDuration, easing }));
    const obj2 = { duration: timingPresets.timingStandardDuration, easing };
  }, items);
  const tmpResult = token(4559);
  const fn = function b() {
    return { paddingBottom: sharedValue.get() };
  };
  fn.__closure = { paddingSV: sharedValue };
  fn.__workletHash = 5673482424037;
  fn.__initData = __initData;
  return token(4559).useAnimatedStyle(fn);
}
const jsx = fn(21).jsx;
const Easing = fn(4559).Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
const __initData = {
  code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  ({ style, onLayout, children } = arg0);
  const obj = { style: null, onLayout, children };
  const items = [style, useKeyboardOpenPaddingStyle()];
  obj.style = items;
  return jsx(ReanimatedRexportDefault.View, { style: null, onLayout, children });
}
export { useKeyboardOpenPaddingStyle };
