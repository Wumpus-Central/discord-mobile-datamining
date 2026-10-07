// === Module 12065: FloatingChatInputContainer ===

// Module 12065 (FloatingChatInputContainer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4753 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const Easing = fn(4618).Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
fn(558);
const __initData = { code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
const __initData2 = { code: "function FloatingChatInputContainerTsx2(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = token(576).c(8);
  let obj = token(576);
  token = token(4586).useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const KeyboardController = token(1632).KeyboardController;
      const stateResult = KeyboardController.state();
      let num;
      if (stateResult != null) {
        num = stateResult.height;
      }
      if (num == null) {
        num = 0;
      }
      return num > 0;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let obj2 = token(4586);
  [tmp8, importDefault] = sharedValue(noop.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      const KeyboardEvents = token(1632).KeyboardEvents;
      closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => closure_1(true));
      const KeyboardEvents2 = token(1632).KeyboardEvents;
      closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => closure_1(false));
      return () => {
        closure_0.remove();
        closure_1.remove();
      };
    };
    const items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = noop.useEffect(tmp9, tmp10);
  const tmp7 = sharedValue(noop.useState(first), 2);
  const tmpResult = token(4753);
  if (!tmp8) {
    tmp8 = true === tmpResult.useKeyboardContextForType(tmp(1616).KeyboardTypes.SYSTEM).keyboardWillOpen;
  }
  if (!tmp8) {
    tmp8 = tmp12 !== tmp(1616).KeyboardTypes.SYSTEM;
  }
  dependencyMap = tmp8;
  tmp12 = useKeyboardTypeDefault();
  let num3 = 0;
  if (tmp8) {
    num3 = token;
  }
  sharedValue = token(4618).useSharedValue(num3);
  if (cResult[3] === tmp8) {
    if (cResult[4] === sharedValue) {
      if (cResult[5] === token) {
        let tmp14 = cResult[6];
        let tmp15 = cResult[7];
      }
      const effect1 = noop.useEffect(tmp14, tmp15);
      const fn4 = function v() {
        return { paddingBottom: sharedValue.get() };
      };
      const obj4 = { paddingSV: sharedValue };
      fn4.__closure = obj4;
      fn4.__workletHash = 5673482424037;
      fn4.__initData = __initData;
      return tmp(4618).useAnimatedStyle(fn4);
    }
  }
  const fn3 = function h() {
    let num = 0;
    if (closure_2) {
      num = token;
    }
    const obj = timing;
    const result = sharedValue.set(obj.withTiming(num, { duration: timingPresets.timingStandardDuration, easing }));
    const obj2 = { duration: timingPresets.timingStandardDuration, easing };
  };
  const items1 = [tmp8, token, sharedValue];
  cResult[3] = tmp8;
  cResult[4] = sharedValue;
  cResult[5] = token;
  cResult[6] = fn3;
  cResult[7] = items1;
  tmp15 = items1;
  tmp14 = fn3;
  const tmpResult3 = token(4618);
}) : (() => {
  token = token(4586).useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  let obj = token(4586);
  [tmp5, importDefault] = sharedValue(noop.useState(() => {
    const KeyboardController = token(1632).KeyboardController;
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
    const KeyboardEvents = token(1632).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => closure_1(true));
    const KeyboardEvents2 = token(1632).KeyboardEvents;
    closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => closure_1(false));
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, []);
  const tmp4 = sharedValue(noop.useState(() => {
    const KeyboardController = token(1632).KeyboardController;
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
  const obj3 = token(4753);
  if (!tmp5) {
    tmp5 = true === obj3.useKeyboardContextForType(token(1616).KeyboardTypes.SYSTEM).keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== token(1616).KeyboardTypes.SYSTEM;
  }
  dependencyMap = tmp5;
  tmp7 = useKeyboardTypeDefault();
  let num = 0;
  if (tmp5) {
    num = token;
  }
  sharedValue = token(4618).useSharedValue(num);
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
  const tmpResult = token(4618);
  const fn = function b() {
    return { paddingBottom: sharedValue.get() };
  };
  fn.__closure = { paddingSV: sharedValue };
  fn.__workletHash = 12921006654950;
  fn.__initData = __initData2;
  return token(4618).useAnimatedStyle(fn);
});
let closure_9 = tmp3;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ style, onLayout, children } = arg0);
  const tmp3 = closure_9();
  if (cResult[0] === tmp3) {
    if (cResult[1] === style) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === onLayout) {
        if (cResult[5] === tmp4) {
          let tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
    const obj2 = { style: tmp4, onLayout, children };
    const tmp8 = jsx(ReanimatedRexportDefault.View, { style: tmp4, onLayout, children });
    cResult[3] = children;
    cResult[4] = onLayout;
    cResult[5] = tmp4;
    cResult[6] = tmp8;
    tmp5 = tmp8;
  }
  const items = [style, tmp3];
  cResult[0] = tmp3;
  cResult[1] = style;
  cResult[2] = items;
  tmp4 = items;
}) : ((arg0) => {
  ({ style, onLayout, children } = arg0);
  const obj = { style: null, onLayout, children };
  const items = [style, closure_9()];
  obj.style = items;
  return jsx(ReanimatedRexportDefault.View, { style: null, onLayout, children });
});
export const useKeyboardOpenPaddingStyle = tmp3;