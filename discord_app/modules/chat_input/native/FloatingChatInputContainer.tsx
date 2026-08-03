import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import { Easing } from "module_4054";

const require = arg1;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let closure_7 = { code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
let result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default function FloatingChatInputContainer(arg0) {
  let c1;
  let children;
  let onLayout;
  let style;
  let tmp6;
  let token;
  let importDefault;
  let dependencyMap;
  let sharedValue;
  ({ style, onLayout, children } = arg0);
  token = token(3897).useToken(importDefault(712).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  let obj = token(3897);
  const obj2 = React;
  const tmp3 = importDefault;
  [tmp6, c1] = sharedValue(React.useState(() => {
    const KeyboardController = token(_undefined[6]).KeyboardController;
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
    const KeyboardEvents = token(_undefined[6]).KeyboardEvents;
    let closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => lib(true));
    const KeyboardEvents2 = token(_undefined[6]).KeyboardEvents;
    let closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => lib(false));
    return () => {
      closure_0.remove();
      lib.remove();
    };
  }, []);
  const tmp5 = sharedValue(React.useState(() => {
    const KeyboardController = token(_undefined[6]).KeyboardController;
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
  const obj3 = token(4059);
  if (!tmp6) {
    tmp6 = true === obj3.useKeyboardContextForType(token(1579).KeyboardTypes.SYSTEM).keyboardWillOpen;
  }
  if (!tmp6) {
    tmp6 = tmp8 !== token(1579).KeyboardTypes.SYSTEM;
  }
  dependencyMap = tmp6;
  let tmpResult = tmp(4054);
  let num = 0;
  if (tmp6) {
    num = token;
  }
  sharedValue = tmpResult.useSharedValue(num);
  const items = [tmp6, token, sharedValue];
  const effect1 = obj2.useEffect(() => {
    let obj = token(_undefined[9]);
    let num = 0;
    if (_undefined) {
      num = token;
    }
    obj = { duration: token(_undefined[10]).timingStandardDuration, easing: outer1_6 };
    const result = sharedValue.set(obj.withTiming(num, obj));
  }, items);
  tmpResult = tmp(4054);
  class FloatingChatInputContainerTsx1 {
    constructor() {
      obj = { paddingBottom: useSharedValue.get() };
      return obj;
    }
  }
  FloatingChatInputContainerTsx1.__closure = { paddingSV: sharedValue };
  FloatingChatInputContainerTsx1.__workletHash = 5673482424037;
  FloatingChatInputContainerTsx1.__initData = closure_7;
  const animatedStyle = tmpResult.useAnimatedStyle(FloatingChatInputContainerTsx1);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return jsx(tmp3(4054).View, { style, onLayout, children });
};