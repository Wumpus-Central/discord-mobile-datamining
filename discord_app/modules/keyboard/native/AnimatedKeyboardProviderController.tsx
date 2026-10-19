// === Module 11701: AnimatedKeyboardProviderController ===

// Module 11701 (AnimatedKeyboardProviderController)
import c from "c" /* 576 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1647 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4945 */;
import KeyboardPreloadExperiment2 from "KeyboardPreloadExperiment" /* 11702 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
let ReanimatedRexport = fn(4945);
const mutable = ReanimatedRexport.makeMutable(0);
ReanimatedRexport = fn(4945);
const mutable1 = ReanimatedRexport.makeMutable(fn(4945).KeyboardState.UNKNOWN);
fn(558);
const __initData = { code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
const __initData2 = { code: "function AnimatedKeyboardProviderControllerTsx2(e_0){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e_0.height);}" };
const __initData3 = { code: "function AnimatedKeyboardProviderControllerTsx3(e_1){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e_1.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e_1.height);}" };
const __initData4 = { code: "function AnimatedKeyboardProviderControllerTsx4(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
const __initData5 = { code: "function AnimatedKeyboardProviderControllerTsx5(e_0){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e_0.height);}" };
const __initData6 = { code: "function AnimatedKeyboardProviderControllerTsx6(e_1){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e_1.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e_1.height);}" };
const ReactCompilerGating = fn(558);
let closure_12 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ComponentInner() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onStart: null, onMove: null, onEnd: null };
    const fn = function l(height) {
      if (0 === height.height) {
        let OPEN = ReanimatedRexport2.KeyboardState.CLOSED;
      } else {
        OPEN = ReanimatedRexport2.KeyboardState.OPEN;
      }
      const result = mutable1.set(OPEN);
    };
    const obj3 = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport2.KeyboardState };
    fn.__closure = obj3;
    fn.__workletHash = 12130162639136;
    fn.__initData = __initData;
    obj2.onStart = fn;
    const fn2 = function n(height) {
      const result = mutable.set(height.height);
    };
    const obj4 = { animatedKeyboardHeight: mutable };
    fn2.__closure = obj4;
    fn2.__workletHash = 3329053040059;
    fn2.__initData = __initData2;
    obj2.onMove = fn2;
    const fn3 = function o(height) {
      if (0 === height.height) {
        let OPEN = ReanimatedRexport2.KeyboardState.CLOSED;
      } else {
        OPEN = ReanimatedRexport2.KeyboardState.OPEN;
      }
      const result = mutable1.set(OPEN);
      const result1 = mutable.set(height.height);
    };
    const obj5 = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport2.KeyboardState, animatedKeyboardHeight: mutable };
    fn3.__closure = obj5;
    fn3.__workletHash = 12335874047522;
    fn3.__initData = __initData3;
    obj2.onEnd = fn3;
    const items = [];
    cResult[0] = obj2;
    cResult[1] = items;
    tmp4 = obj2;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  KeyboardChatScrollView.useKeyboardHandler(tmp4, tmp5);
  return null;
}) : (function ComponentInner() {
  const obj2 = { onStart: null, onMove: null, onEnd: null };
  const fn = function o(height) {
    if (0 === height.height) {
      let OPEN = ReanimatedRexport2.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport2.KeyboardState.OPEN;
    }
    const result = mutable1.set(OPEN);
  };
  const obj = KeyboardChatScrollView;
  fn.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport2.KeyboardState };
  fn.__workletHash = 12240758232741;
  fn.__initData = __initData4;
  obj2.onStart = fn;
  const fn2 = function t(height) {
    const result = mutable.set(height.height);
  };
  fn2.__closure = { animatedKeyboardHeight: mutable };
  fn2.__workletHash = 16197056771772;
  fn2.__initData = __initData5;
  obj2.onMove = fn2;
  const fn3 = function e(height) {
    if (0 === height.height) {
      let OPEN = ReanimatedRexport2.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport2.KeyboardState.OPEN;
    }
    const result = mutable1.set(OPEN);
    const result1 = mutable.set(height.height);
  };
  const obj3 = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport2.KeyboardState };
  const obj4 = { animatedKeyboardHeight: mutable };
  fn3.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport2.KeyboardState, animatedKeyboardHeight: mutable };
  fn3.__workletHash = 8243537147559;
  fn3.__initData = __initData6;
  obj2.onEnd = fn3;
  obj.useKeyboardHandler(obj2, []);
  return null;
}));
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default {
  Component: ReactCompilerGating.isReactCompilerEnabled() ? (function Component(children) {
    const cResult = c.c(5);
    children = children.children;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { location: "AnimatedKeyboardProviderController" };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    const KeyboardPreloadExperiment = KeyboardPreloadExperiment2.KeyboardPreloadExperiment;
    const tmp5 = !KeyboardPreloadExperiment.useConfig(first).disablePreload;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = React2(closure_12, {});
      cResult[1] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === children) {
      if (cResult[3] === tmp5) {
        let tmp10 = cResult[4];
      }
      return tmp10;
    }
    const obj3 = { enabled: true, navigationBarTranslucent: true, preload: tmp5, preserveEdgeToEdge: true, statusBarTranslucent: true, children: null };
    const items = [children, tmp6];
    obj3.children = items;
    const tmp11 = React3(KeyboardChatScrollView.KeyboardProvider, obj3);
    cResult[2] = children;
    cResult[3] = tmp5;
    cResult[4] = tmp11;
    tmp10 = tmp11;
  }) : (function Component(children) {
    const KeyboardPreloadExperiment = KeyboardPreloadExperiment2.KeyboardPreloadExperiment;
    const obj = { enabled: true, navigationBarTranslucent: true, preload: !KeyboardPreloadExperiment.useConfig({ location: "AnimatedKeyboardProviderController" }).disablePreload, preserveEdgeToEdge: true, statusBarTranslucent: true, children: null };
    const items = [children.children, React2(closure_12, {})];
    obj.children = items;
    return React3(KeyboardChatScrollView.KeyboardProvider, obj);
  }),
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1
};