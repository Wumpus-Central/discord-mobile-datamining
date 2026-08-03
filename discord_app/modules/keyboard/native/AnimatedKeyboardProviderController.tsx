import jsxProd from "jsxProd";
import module_4054 from "module_4054";
import mutable from "noop";
import module_4054 from "module_4054";
import importAllResult from "noop";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const mutable1 = module_4054.makeMutable(require("module_4054").KeyboardState.UNKNOWN);
let closure_6 = { code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
let closure_7 = { code: "function AnimatedKeyboardProviderControllerTsx2(e){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e.height);}" };
let closure_8 = { code: "function AnimatedKeyboardProviderControllerTsx3(e){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e.height);}" };
let closure_9 = require("noop").memo(() => {
  let obj = require(1595) /* KeyboardChatScrollView */;
  obj = { onStart: null, onMove: null, onEnd: null };
  const fn = function o(height) {
    if (0 === height.height) {
      let OPEN = callback(4054).KeyboardState.CLOSED;
    } else {
      OPEN = callback(4054).KeyboardState.OPEN;
    }
    const result = store2.set(OPEN);
  };
  obj = { animatedKeyboardState: mutable1, KeyboardState: require(4054).KeyboardState };
  fn.__closure = obj;
  fn.__workletHash = 12130162639136;
  fn.__initData = closure_6;
  obj[0] = fn;
  const fn2 = function t(height) {
    const result = store.set(height.height);
  };
  fn2.__closure = { animatedKeyboardHeight: mutable };
  fn2.__workletHash = 1398293011995;
  fn2.__initData = closure_7;
  obj[1] = fn2;
  const fn3 = function e(height) {
    if (0 === height.height) {
      let OPEN = callback(4054).KeyboardState.CLOSED;
    } else {
      OPEN = callback(4054).KeyboardState.OPEN;
    }
    const result = store2.set(OPEN);
    const result1 = store.set(height.height);
  };
  fn3.__closure = { animatedKeyboardState: mutable1, KeyboardState: require(4054).KeyboardState, animatedKeyboardHeight: mutable };
  fn3.__workletHash = 10688534401196;
  fn3.__initData = closure_8;
  obj[2] = fn3;
  obj.useKeyboardHandler(obj, []);
  return null;
});
let obj = {
  Component(children) {
    const obj = { enabled: true, navigationBarTranslucent: true, preserveEdgeToEdge: true, statusBarTranslucent: true, children: null };
    const items = [children.children, callback(closure_9, {})];
    obj[4] = items;
    return callback2(require(1595) /* KeyboardChatScrollView */.KeyboardProvider, obj);
  },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1
};
let result = require("module_4054").fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default obj;