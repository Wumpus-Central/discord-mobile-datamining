// === Module 13035: AnimatedKeyboardProviderController ===

// Module 13035 (AnimatedKeyboardProviderController)
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import _mod1652 from "module_1652" /* 1652 */;
import KeyboardPreloadExperiment2 from "KeyboardPreloadExperiment" /* 13036 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
let module_1652 = fn(1652);
const mutable = module_1652.makeMutable(0);
module_1652 = fn(1652);
const mutable1 = module_1652.makeMutable(fn(1652).KeyboardState.UNKNOWN);
let closure_6 = { code: "(function AnimatedKeyboardProviderControllerTsx1(e){let[animatedKeyboardState,KeyboardState]=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);})" };
let closure_7 = { code: "(function AnimatedKeyboardProviderControllerTsx2(e){let[animatedKeyboardHeight]=this.__closure;animatedKeyboardHeight.set(e.height);})" };
let closure_8 = { code: "(function AnimatedKeyboardProviderControllerTsx3(e){let[animatedKeyboardState,KeyboardState,animatedKeyboardHeight]=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e.height);})" };
let closure_9 = noop.memo(function ComponentInner() {
  items = [closure_6, mutable1, _mod1652.KeyboardState];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  const obj2 = { onStart: null, onMove: null, onEnd: null };
  class AnimatedKeyboardProviderControllerTsx1 {
    constructor(arg0) {
      tmp = closure_0;
      if (0 === arg0.height) {
        tmp3 = closure_1;
        OPEN = closure_1.CLOSED;
      } else {
        tmp2 = closure_1;
        OPEN = closure_1.OPEN;
      }
      result = closure_0.set(OPEN);
      return;
    }
  }
  const items1 = [tmp5, tmp6];
  AnimatedKeyboardProviderControllerTsx1.__closure = items1;
  AnimatedKeyboardProviderControllerTsx1.__workletHash = 53414504345;
  AnimatedKeyboardProviderControllerTsx1.__initData = tmp4;
  obj2.onStart = AnimatedKeyboardProviderControllerTsx1;
  const items2 = [closure_7, mutable];
  c0 = undefined;
  [tmp8, tmp9] = items2;
  class AnimatedKeyboardProviderControllerTsx2 {
    constructor(arg0) {
      result = closure_0.set(arg0.height);
      return;
    }
  }
  const items3 = [tmp9];
  AnimatedKeyboardProviderControllerTsx2.__closure = items3;
  AnimatedKeyboardProviderControllerTsx2.__workletHash = 2792046606466;
  AnimatedKeyboardProviderControllerTsx2.__initData = tmp8;
  obj2.onMove = AnimatedKeyboardProviderControllerTsx2;
  const items4 = [closure_8, mutable1, _mod1652.KeyboardState, mutable];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items4;
  class AnimatedKeyboardProviderControllerTsx3 {
    constructor(arg0) {
      tmp = closure_0;
      if (0 === arg0.height) {
        tmp3 = closure_1;
        OPEN = closure_1.CLOSED;
      } else {
        tmp2 = closure_1;
        OPEN = closure_1.OPEN;
      }
      result = closure_0.set(OPEN);
      result1 = closure_2.set(arg0.height);
      return;
    }
  }
  const items5 = [tmp11, tmp12, tmp13];
  AnimatedKeyboardProviderControllerTsx3.__closure = items5;
  AnimatedKeyboardProviderControllerTsx3.__workletHash = 4434952784341;
  AnimatedKeyboardProviderControllerTsx3.__initData = tmp10;
  obj2.onEnd = AnimatedKeyboardProviderControllerTsx3;
  KeyboardChatScrollView.useKeyboardHandler(obj2, []);
  return null;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default {
  Component(children) {
    const KeyboardPreloadExperiment = KeyboardPreloadExperiment2.KeyboardPreloadExperiment;
    const obj = { enabled: true, navigationBarTranslucent: true, preload: !KeyboardPreloadExperiment.useConfig({ location: "AnimatedKeyboardProviderController" }).disablePreload, preserveEdgeToEdge: true, statusBarTranslucent: true, children: null };
    items = [children.children, React2(closure_9, {})];
    obj.children = items;
    return React3(KeyboardChatScrollView.KeyboardProvider, obj);
  },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1
};