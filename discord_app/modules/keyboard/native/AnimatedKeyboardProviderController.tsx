// discord_app/modules/keyboard/native/AnimatedKeyboardProviderController.tsx
import KeyboardChatScrollView from "../../../../_runtime/01625_KeyboardChatScrollView.js";
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
let ReanimatedRexport = fn(4296);
const mutable = ReanimatedRexport.makeMutable(0);
ReanimatedRexport = fn(4296);
const mutable1 = ReanimatedRexport.makeMutable(fn(4296).KeyboardState.UNKNOWN);
const __initData = {
  code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}",
};
const __initData2 = {
  code: "function AnimatedKeyboardProviderControllerTsx2(e){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e.height);}",
};
const __initData3 = {
  code: "function AnimatedKeyboardProviderControllerTsx3(e){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e.height);}",
};
let closure_9 = noop.memo(() => {
  let obj = { onStart: null, onMove: null, onEnd: null };
  const fn = function o(height) {
    if (0 === height.height) {
      let OPEN = ReanimatedRexport2.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport2.KeyboardState.OPEN;
    }
    const result = mutable1.set(OPEN);
  };
  obj = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport2.KeyboardState };
  fn.__closure = obj;
  fn.__workletHash = 12130162639136;
  fn.__initData = __initData;
  obj.onStart = fn;
  const fn2 = function t(height) {
    const result = mutable.set(height.height);
  };
  fn2.__closure = { animatedKeyboardHeight: mutable };
  fn2.__workletHash = 1398293011995;
  fn2.__initData = __initData2;
  obj.onMove = fn2;
  const fn3 = function e(height) {
    if (0 === height.height) {
      let OPEN = ReanimatedRexport2.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport2.KeyboardState.OPEN;
    }
    const result = mutable1.set(OPEN);
    const result1 = mutable.set(height.height);
  };
  fn3.__closure = {
    animatedKeyboardState: mutable1,
    KeyboardState: ReanimatedRexport2.KeyboardState,
    animatedKeyboardHeight: mutable,
  };
  fn3.__workletHash = 10688534401196;
  fn3.__initData = __initData3;
  obj.onEnd = fn3;
  obj.useKeyboardHandler(obj, []);
  return null;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default {
  Component(children) {
    const obj = {
      enabled: true,
      navigationBarTranslucent: true,
      preserveEdgeToEdge: true,
      statusBarTranslucent: true,
      children: null,
    };
    const items = [children.children, React2(closure_9, {})];
    obj.children = items;
    return React3(KeyboardChatScrollView.KeyboardProvider, obj);
  },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1,
};
