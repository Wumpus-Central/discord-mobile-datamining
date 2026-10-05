// === Module 12050: FloatingChatInputContainer ===

// Module 12050 (FloatingChatInputContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4747 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap, set;

const jsx = Fragment.jsx;
const Easing = ReanimatedRexport.Easing;
let closure_6 = Easing.bezier(0.2, 0, 0, 1);
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
const __initData2 = { code: "function FloatingChatInputContainerTsx2(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let onLayout;
  let style;
  const obj = react2;
  const cResult = obj.c(7);
  ({ style, onLayout, children } = arg0);
  const tmp3 = closure_9();
  if (cResult[0] === tmp3) {
    let tmp4;
    if (cResult[1] === style) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === onLayout) {
        let tmp5;
        if (cResult[5] === tmp4) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
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
  let children;
  let onLayout;
  let style;
  ({ style, onLayout, children } = arg0);
  const items = [style, closure_9()];
  closure_9();
  return jsx(ReanimatedRexportDefault.View, { style: items, onLayout, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let easing;
  let first;
  let sharedValue;
  let tmp10;
  let tmp8;
  let tmp9;
  let token;
  let obj = token(576);
  const cResult = obj.c(8);
  const obj2 = token(4580);
  token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const KeyboardController = token(closure_2[8]).KeyboardController;
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
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [tmp8, importDefault] = sharedValue(react.useState(first), 2);
  sharedValue(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      const KeyboardEvents = token(closure_2[8]).KeyboardEvents;
      let closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => closure_1(true));
      const KeyboardEvents2 = token(closure_2[8]).KeyboardEvents;
      let closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => closure_1(false));
      return () => {
        closure_0.remove();
        closure_1.remove();
      };
    };
    const items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = react.useEffect(tmp9, tmp10);
  const tmpResult = token(4747);
  const keyboardWillOpen = tmpResult.useKeyboardContextForType(tmp(1616).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp12 = useKeyboardTypeDefault();
  const SYSTEM = tmp(1616).KeyboardTypes.SYSTEM;
  if (!tmp8) {
    tmp8 = true === keyboardWillOpen;
  }
  if (!tmp8) {
    tmp8 = tmp12 !== SYSTEM;
  }
  dependencyMap = tmp8;
  let num3 = 0;
  const useSharedValue = token(4612).useSharedValue;
  token(4612);
  if (tmp8) {
    num3 = token;
  }
  sharedValue = useSharedValue(num3);
  if (cResult[3] === tmp8) {
    if (cResult[4] === sharedValue) {
      let tmp15;
      let tmp16;
      if (cResult[5] === token) {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const effect1 = react.useEffect(tmp15, tmp16);
      const fn4 = function v() {
        const obj = { paddingBottom: sharedValue.get() };
        return obj;
      };
      const obj4 = { paddingSV: sharedValue };
      fn4.__closure = obj4;
      fn4.__workletHash = 5673482424037;
      fn4.__initData = __initData;
      const tmpResult4 = token(4612);
      return tmpResult4.useAnimatedStyle(fn4);
    }
  }
  const fn3 = function h() {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (closure_2) {
      num = token;
    }
    const obj = { duration: timingPresets.timingStandardDuration, easing };
    const result = set(withTiming(num, obj));
  };
  const items1 = [tmp8, token, sharedValue];
  cResult[3] = tmp8;
  cResult[4] = sharedValue;
  cResult[5] = token;
  cResult[6] = fn3;
  cResult[7] = items1;
  tmp16 = items1;
  tmp15 = fn3;
}) : (() => {
  let closure_2;
  let easing;
  let sharedValue;
  let tmp5;
  let token;
  let obj = token(4580);
  token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  const tmp4 = sharedValue(react.useState(() => {
    const KeyboardController = token(closure_2[8]).KeyboardController;
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
  [tmp5, importDefault] = tmp4;
  const effect = react.useEffect(() => {
    const KeyboardEvents = token(closure_2[8]).KeyboardEvents;
    let closure_0 = KeyboardEvents.addListener("keyboardWillShow", () => closure_1(true));
    const KeyboardEvents2 = token(closure_2[8]).KeyboardEvents;
    let closure_1 = KeyboardEvents2.addListener("keyboardWillHide", () => closure_1(false));
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, []);
  const obj3 = token(4747);
  const keyboardWillOpen = obj3.useKeyboardContextForType(token(1616).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp7 = useKeyboardTypeDefault();
  const SYSTEM = token(1616).KeyboardTypes.SYSTEM;
  if (!tmp5) {
    tmp5 = true === keyboardWillOpen;
  }
  if (!tmp5) {
    tmp5 = tmp7 !== SYSTEM;
  }
  dependencyMap = tmp5;
  let num = 0;
  const useSharedValue = token(4612).useSharedValue;
  token(4612);
  if (tmp5) {
    num = token;
  }
  sharedValue = useSharedValue(num);
  const items = [tmp5, token, sharedValue];
  const effect1 = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (closure_2) {
      num = token;
    }
    const obj = { duration: timingPresets.timingStandardDuration, easing };
    const result = set(withTiming(num, obj));
  }, items);
  const fn = function b() {
    const obj = { paddingBottom: sharedValue.get() };
    return obj;
  };
  fn.__closure = { paddingSV: sharedValue };
  fn.__workletHash = 12921006654950;
  fn.__initData = __initData2;
  const tmpResult2 = token(4612);
  return tmpResult2.useAnimatedStyle(fn);
});
let closure_9 = tmp3;
let result = size.fileFinishedImporting("modules/chat_input/native/FloatingChatInputContainer.tsx");

export default tmp2;
export const useKeyboardOpenPaddingStyle = tmp3;