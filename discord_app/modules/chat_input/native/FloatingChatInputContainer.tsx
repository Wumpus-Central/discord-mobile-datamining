// discord_app/modules/chat_input/native/FloatingChatInputContainer.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4115 from "../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import { Easing } from "../../reanimated/ReanimatedRexport.tsx";

const require = fn;
function useKeyboardOpenPaddingStyle() {
  token = token(4097).useToken(ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  let obj = token(4097);
  [tmp5, importDefault] = sharedValue(React.useState(() => {
    const KeyboardController = token(1643).KeyboardController;
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
    const KeyboardEvents = token(1643).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => lib(true));
    const KeyboardEvents2 = token(1643).KeyboardEvents;
    closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => lib(false));
    return () => {
      closure_0.remove();
      lib.remove();
    };
  }, []);
  const tmp4 = sharedValue(React.useState(() => {
    const KeyboardController = token(1643).KeyboardController;
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
  const obj3 = token(4239);
  if (!tmp5) {
    tmp5 = true === obj3.useKeyboardContextForType(token(1627).KeyboardTypes.SYSTEM).keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== token(1627).KeyboardTypes.SYSTEM;
  }
  dependencyMap = tmp5;
  let tmpResult = tmp(4115);
  let num = 0;
  if (tmp5) {
    num = token;
  }
  sharedValue = tmpResult.useSharedValue(num);
  const items = [tmp5, token, sharedValue];
  const effect1 = React.useEffect(() => {
    let obj = token(4664);
    let num = 0;
    if (dependencyMap) {
      num = token;
    }
    obj = { duration: token(4667).timingStandardDuration, easing: closure_1_6 };
    const result = sharedValue.set(obj.withTiming(num, obj));
  }, items);
  tmpResult = tmp(4115);
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
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  ({ style, onLayout, children } = arg0);
  style = [, ];
  style[0] = style;
  style[1] = useKeyboardOpenPaddingStyle();
  return jsx(_modDef4115.View, { style, onLayout, children });
};
export { useKeyboardOpenPaddingStyle };