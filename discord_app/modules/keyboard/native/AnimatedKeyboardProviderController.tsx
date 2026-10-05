// === Module 15848: AnimatedKeyboardProviderController ===

// Module 15848 (AnimatedKeyboardProviderController)
import react2 from "react" /* 576 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1632 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4612 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children, set;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
const mutable = ReanimatedRexport.makeMutable(0);
ReanimatedRexport = ReanimatedRexport_mod;
const mutable1 = ReanimatedRexport.makeMutable(ReanimatedRexport.KeyboardState.UNKNOWN);
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
const __initData2 = { code: "function AnimatedKeyboardProviderControllerTsx2(e_0){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e_0.height);}" };
const __initData3 = { code: "function AnimatedKeyboardProviderControllerTsx3(e_1){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e_1.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e_1.height);}" };
const __initData4 = { code: "function AnimatedKeyboardProviderControllerTsx4(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
const __initData5 = { code: "function AnimatedKeyboardProviderControllerTsx5(e_0){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e_0.height);}" };
const __initData6 = { code: "function AnimatedKeyboardProviderControllerTsx6(e_1){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e_1.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e_1.height);}" };
const memo = react.memo;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let first;
  let items;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React2(closure_12, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== children) {
    const obj2 = { enabled: true, navigationBarTranslucent: true, preserveEdgeToEdge: true, statusBarTranslucent: true, children: items };
    items = [children, first];
    const tmp10 = _false(KeyboardChatScrollView.KeyboardProvider, obj2);
    cResult[1] = children;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : ((children) => {
  let items;
  const obj = { enabled: true, navigationBarTranslucent: true, preserveEdgeToEdge: true, statusBarTranslucent: true, children: items };
  items = [children.children, ];
  const KeyboardProvider = KeyboardChatScrollView.KeyboardProvider;
  items[1] = React2(closure_12, {});
  return _false(KeyboardProvider, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let fn;
  let fn2;
  let fn3;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onStart: fn, onMove: fn2, onEnd: fn3 };
    fn = function y(height) {
      let OPEN;
      set = mutable1.set;
      if (0 === height.height) {
        OPEN = ReanimatedRexport.KeyboardState.CLOSED;
      } else {
        OPEN = ReanimatedRexport.KeyboardState.OPEN;
      }
      const result = set(OPEN);
    };
    fn.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState };
    fn.__workletHash = 12130162639136;
    fn.__initData = __initData;
    fn2 = function n(height) {
      const result = mutable.set(height.height);
    };
    const obj4 = { animatedKeyboardHeight: mutable };
    fn2.__closure = obj4;
    fn2.__workletHash = 3329053040059;
    fn2.__initData = __initData2;
    fn3 = function o(height) {
      let OPEN;
      set = mutable1.set;
      if (0 === height.height) {
        OPEN = ReanimatedRexport.KeyboardState.CLOSED;
      } else {
        OPEN = ReanimatedRexport.KeyboardState.OPEN;
      }
      const result = set(OPEN);
      const result1 = mutable.set(height.height);
    };
    const obj3 = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState };
    fn3.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState, animatedKeyboardHeight: mutable };
    fn3.__workletHash = 12335874047522;
    fn3.__initData = __initData3;
    const items = [];
    cResult[0] = obj2;
    cResult[1] = items;
    const obj5 = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState, animatedKeyboardHeight: mutable };
    tmp4 = obj2;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = KeyboardChatScrollView;
  tmpResult.useKeyboardHandler(tmp4, tmp5);
  return null;
}) : (() => {
  let fn;
  let fn2;
  let fn3;
  const obj = { onStart: fn, onMove: fn2, onEnd: fn3 };
  fn = function o(height) {
    let OPEN;
    set = mutable1.set;
    if (0 === height.height) {
      OPEN = ReanimatedRexport.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport.KeyboardState.OPEN;
    }
    const result = set(OPEN);
  };
  const useKeyboardHandler = KeyboardChatScrollView.useKeyboardHandler;
  fn.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState };
  fn.__workletHash = 12240758232741;
  fn.__initData = __initData4;
  fn2 = function t(height) {
    const result = mutable.set(height.height);
  };
  const obj3 = { animatedKeyboardHeight: mutable };
  fn2.__closure = obj3;
  fn2.__workletHash = 16197056771772;
  fn2.__initData = __initData5;
  fn3 = function e(height) {
    let OPEN;
    set = mutable1.set;
    if (0 === height.height) {
      OPEN = ReanimatedRexport.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport.KeyboardState.OPEN;
    }
    const result = set(OPEN);
    const result1 = mutable.set(height.height);
  };
  ({ animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState });
  fn3.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState, animatedKeyboardHeight: mutable };
  fn3.__workletHash = 8243537147559;
  fn3.__initData = __initData6;
  ({ animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState, animatedKeyboardHeight: mutable });
  useKeyboardHandler(obj, []);
  return null;
}));
let result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default { Component: tmp6, animatedKeyboardHeight: mutable, animatedKeyboardState: mutable1 };