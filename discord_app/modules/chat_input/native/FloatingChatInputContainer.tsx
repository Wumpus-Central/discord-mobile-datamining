// discord_app/modules/chat_input/native/FloatingChatInputContainer.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import { Easing } from "module_4146";

const require = arg1;
function useKeyboardOpenPaddingStyle() {
  let importDefault;
  let tmp5;
  token = token(3989).useToken(require("../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  let obj = token(3989);
  const obj2 = React;
  [tmp5, importDefault] = sharedValue(React.useState(() => {
    const KeyboardController = token(tmp5[6]).KeyboardController;
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
  const effect = React.useEffect(() => {
    const KeyboardEvents = token(tmp5[6]).KeyboardEvents;
    let closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => lib(true));
    const KeyboardEvents2 = token(tmp5[6]).KeyboardEvents;
    let closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => lib(false));
    return () => {
      closure_0.remove();
      lib.remove();
    };
  }, []);
  const tmp4 = sharedValue(React.useState(() => {
    const KeyboardController = token(tmp5[6]).KeyboardController;
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
  const obj3 = token(4151);
  if (!tmp5) {
    tmp5 = true === obj3.useKeyboardContextForType(token(1579).KeyboardTypes.SYSTEM).keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== token(1579).KeyboardTypes.SYSTEM;
  }
  const dependencyMap = tmp5;
  let tmpResult = tmp(4146);
  let num = 0;
  if (tmp5) {
    num = token;
  }
  sharedValue = tmpResult.useSharedValue(num);
  const items = [tmp5, token, sharedValue];
  const effect1 = obj2.useEffect(() => {
    let obj = token(tmp5[9]);
    let num = 0;
    if (tmp5) {
      num = token;
    }
    obj = { duration: token(tmp5[10]).timingStandardDuration, easing: outer1_6 };
    const result = sharedValue.set(obj.withTiming(num, obj));
  }, items);
  tmpResult = tmp(4146);
  const fn = function b() {
    return { paddingBottom: sharedValue.get() };
  };
  fn.__closure = { paddingSV: sharedValue };
  fn.__workletHash = 5673482424037;
  fn.__initData = closure_7;
  return tmpResult.useAnimatedStyle(fn);
}
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let closure_7 = { code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
let result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  let children;
  let onLayout;
  let style;
  ({ style, onLayout, children } = arg0);
  style = [, ];
  style[0] = style;
  style[1] = useKeyboardOpenPaddingStyle();
  return jsx(require("../../reanimated/ReanimatedRexport.tsx").View, { style, onLayout, children });
};
export { useKeyboardOpenPaddingStyle };