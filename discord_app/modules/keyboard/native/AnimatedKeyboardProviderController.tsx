// discord_app/modules/keyboard/native/AnimatedKeyboardProviderController.tsx
import c from "../../../../_runtime/00576_c.js";
import KeyboardChatScrollView from "../../../../_runtime/01632_KeyboardChatScrollView.js";
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
let ReanimatedRexport = fn(4612);
const mutable = ReanimatedRexport.makeMutable(0);
ReanimatedRexport = fn(4612);
const mutable1 = ReanimatedRexport.makeMutable(fn(4612).KeyboardState.UNKNOWN);
fn(558);
const __initData = {
  code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}",
};
const __initData2 = {
  code: "function AnimatedKeyboardProviderControllerTsx2(e_0){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e_0.height);}",
};
const __initData3 = {
  code: "function AnimatedKeyboardProviderControllerTsx3(e_1){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e_1.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e_1.height);}",
};
const __initData4 = {
  code: "function AnimatedKeyboardProviderControllerTsx4(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}",
};
const __initData5 = {
  code: "function AnimatedKeyboardProviderControllerTsx5(e_0){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e_0.height);}",
};
const __initData6 = {
  code: "function AnimatedKeyboardProviderControllerTsx6(e_1){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e_1.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e_1.height);}",
};
const ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { onStart: null, onMove: null, onEnd: null };
          const fn = function y(height) {
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
          const obj5 = {
            animatedKeyboardState: mutable1,
            KeyboardState: ReanimatedRexport2.KeyboardState,
            animatedKeyboardHeight: mutable,
          };
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
      }
    : () => {
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
        fn3.__closure = {
          animatedKeyboardState: mutable1,
          KeyboardState: ReanimatedRexport2.KeyboardState,
          animatedKeyboardHeight: mutable,
        };
        fn3.__workletHash = 8243537147559;
        fn3.__initData = __initData6;
        obj2.onEnd = fn3;
        obj.useKeyboardHandler(obj2, []);
        return null;
      },
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default {
  Component: ReactCompilerGating.isReactCompilerEnabled()
    ? (children) => {
        const cResult = c.c(3);
        children = children.children;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = React2(closure_12, {});
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== children) {
          const obj2 = {
            enabled: true,
            navigationBarTranslucent: true,
            preserveEdgeToEdge: true,
            statusBarTranslucent: true,
            children: null,
          };
          const items = [children, first];
          obj2.children = items;
          const tmp10 = React3(KeyboardChatScrollView.KeyboardProvider, obj2);
          cResult[1] = children;
          cResult[2] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[2];
        }
        return tmp8;
      }
    : (children) => {
        const obj = {
          enabled: true,
          navigationBarTranslucent: true,
          preserveEdgeToEdge: true,
          statusBarTranslucent: true,
          children: null,
        };
        const items = [children.children, React2(closure_12, {})];
        obj.children = items;
        return React3(KeyboardChatScrollView.KeyboardProvider, obj);
      },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1,
};
