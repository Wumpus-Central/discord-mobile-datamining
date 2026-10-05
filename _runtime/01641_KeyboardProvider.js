// === Module 1641: KeyboardProvider ===

// Module 1641 (KeyboardProvider)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1633 */;
import KeyboardController2 from "KeyboardController" /* 1835 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native_mod from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native_mod2 from "react-native" /* 1642 */;
import cancelAnimation from "module_1643" /* 1643 */;

const require = globalThis.__r;
let _require, closure_0, closure_1, dependencyMap;

let Platform;
let StyleSheet;
let c10;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useRef: metroImportDefault, useState: metroImportAll } = react);
react = react_mod;
let react_native = react_native_mod2;
let Animated = react_native.Animated;
({ Platform, StyleSheet } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
react_native = react_native_mod2;
let closure_12 = react_native.isEdgeToEdge();
let closure_13 = cancelAnimation.createAnimatedComponent(Animated.createAnimatedComponent(KeyboardControllerNative.KeyboardControllerView));
const container = StyleSheet.create({ container: { flex: 1 }, hidden: { display: "none", position: "absolute" } });
const android = "android";
const __initData = { code: "function pnpm_animatedTsx1(event,platforms){const{OS,progressSV,heightSV}=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}}" };
const __initData2 = { code: "function pnpm_animatedTsx2(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"ios\"]);}" };
const __initData3 = { code: "function pnpm_animatedTsx3(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
const __initData4 = { code: "function pnpm_animatedTsx4(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\",\"ios\"]);}" };
const __initData5 = { code: "function pnpm_animatedTsx5(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
const __initData6 = { code: "function pnpm_animatedTsx6(e){const{layout}=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}}" };

export const KeyboardProvider = (enabled) => {
  let children;
  let fn2;
  let fn3;
  let hidden;
  let items2;
  let navigationBarTranslucent;
  let preserveEdgeToEdge;
  let setEnabled;
  let setKeyboardHandlers;
  let sharedValue1;
  let sharedValue2;
  let statusBarTranslucent;
  let tmp18;
  let tmp19;
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  ({ children, statusBarTranslucent, navigationBarTranslucent, preserveEdgeToEdge } = enabled);
  if (!tmp) {
    tmp = enabled;
  }
  const preload = enabled.preload;
  const tmp2 = undefined === preload || preload;
  _require = tmp2;
  const tmp3 = sharedValue1(null);
  dependencyMap = tmp3;
  [enabled, _slicedToArray] = sharedValue2(tmp);
  let obj = require("module_1832");
  let closure_4 = obj.useAnimatedValue(0);
  let obj2 = require("module_1832");
  let closure_5 = obj2.useAnimatedValue(0);
  let obj3 = require("module_1643");
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = require("module_1643");
  sharedValue1 = obj4.useSharedValue(0);
  const obj5 = require("module_1643");
  sharedValue2 = obj5.useSharedValue(null);
  const obj6 = require("module_1832");
  Animated = obj6.useEventHandlerRegistration(tmp3);
  const obj7 = require("module_1832");
  const setInputHandlers = obj7.useEventHandlerRegistration(tmp3);
  const update = closure_4(enabled(function*() {
    let ref;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const KeyboardControllerViewCommands = v3(ref[7]).KeyboardControllerViewCommands;
            const result = KeyboardControllerViewCommands.synchronizeFocusedInputLayout(ref.current);
            const self = this;
            const self2 = this;
            const promise = new Promise((arg0) => {
              closure_0 = arg0;
              const FocusedInputEvents = v3(ref[7]).FocusedInputEvents;
              closure_1 = FocusedInputEvents.addListener("layoutDidSynchronize", () => {
                closure_1.remove();
                closure_0(null);
              });
            });
            ref = 1;
            v3 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        v3 = 3;
        throw tmp11;
      }
    }
  }), []);
  let items = [enabled];
  const tmp9 = sharedValue(() => {
    let obj3;
    const obj = { enabled, animated: { progress, height: Animated.multiply(closure_5, -1) }, reanimated: obj3, layout: sharedValue2, update, setKeyboardHandlers, setInputHandlers, setEnabled };
    obj3 = { progress: sharedValue, height: sharedValue1 };
    ({ progress, height: Animated.multiply(closure_5, -1) });
    return obj;
  }, items);
  const tmp10 = sharedValue(() => {
    let items1;
    const items = [hidden.hidden, ];
    const obj = { transform: items1 };
    items1 = [, ];
    const obj2 = { translateX };
    items1[0] = obj2;
    const obj3 = { translateY };
    items1[1] = obj3;
    items[1] = obj;
    return items;
  }, []);
  const tmp11 = sharedValue(() => {
    let obj2;
    const obj = { nativeEvent: obj2 };
    const items = [obj];
    obj2 = { progress, height };
    return Animated.event(items, { useNativeDriver: true });
  }, []);
  const updateSharedValues = function _(progress, arr) {
    if (arr.includes(android)) {
      sharedValue.value = progress.progress;
      sharedValue1.value = -progress.height;
    }
  };
  const obj8 = { OS: android, progressSV: sharedValue, heightSV: sharedValue1 };
  updateSharedValues.__closure = obj8;
  updateSharedValues.__workletHash = 2170890222740;
  updateSharedValues.__initData = __initData;
  const obj10 = { onKeyboardMoveStart: D, onKeyboardMove: C, onKeyboardMoveInteractive: fn2, onKeyboardMoveEnd: fn3 };
  const obj9 = require("module_1834");
  class D {
    constructor(progress) {
      if (typeof fn === "function") {
        const items = ["ios"];
        if (items.includes(android)) {
          sharedValue.value = progress.progress;
          sharedValue1.value = -progress.height;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  D.__closure = { updateSharedValues };
  D.__workletHash = 17024171887285;
  D.__initData = __initData2;
  class C {
    constructor(progress) {
      if (typeof fn === "function") {
        const items = ["android"];
        if (items.includes(android)) {
          sharedValue.value = progress.progress;
          sharedValue1.value = -progress.height;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  C.__closure = { updateSharedValues };
  C.__workletHash = 9343239356186;
  C.__initData = __initData3;
  fn2 = function p(progress) {
    if (typeof fn === "function") {
      const items = ["android", "ios"];
      if (items.includes(android)) {
        sharedValue.value = progress.progress;
        sharedValue1.value = -progress.height;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn2.__closure = { updateSharedValues };
  fn2.__workletHash = 9270729921284;
  fn2.__initData = __initData4;
  fn3 = function v(progress) {
    if (typeof fn === "function") {
      const items = ["android"];
      if (items.includes(android)) {
        sharedValue.value = progress.progress;
        sharedValue1.value = -progress.height;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn3.__closure = { updateSharedValues };
  fn3.__workletHash = 10129400155228;
  fn3.__initData = __initData5;
  const animatedKeyboardHandler = obj9.useAnimatedKeyboardHandler(obj10, []);
  const obj12 = { onFocusedInputLayoutChanged: I };
  const obj11 = require("module_1834");
  class I {
    constructor(target) {
      if (-1 !== target.target) {
        sharedValue2.value = target;
      } else {
        sharedValue2.value = null;
      }
    }
  }
  I.__closure = { layout: sharedValue2 };
  I.__workletHash = 9857955983587;
  I.__initData = __initData6;
  let items1 = [tmp2];
  const focusedInputLayoutHandler = obj11.useFocusedInputLayoutHandler(obj12, []);
  closure_5(() => {
    if (closure_0) {
      const KeyboardController = KeyboardController2.KeyboardController;
      KeyboardController.preload();
    }
  }, items1);
  const obj14 = { ref: tmp3, enabled, navigationBarTranslucent: tmp19, statusBarTranslucent: tmp18 || statusBarTranslucent, preserveEdgeToEdge: tmp18, style: container.container, onKeyboardMoveReanimated: animatedKeyboardHandler, onKeyboardMoveStart: "Boolean", onKeyboardMove: tmp11, onKeyboardMoveInteractive: tmp11, onKeyboardMoveEnd: tmp11, onFocusedInputLayoutChangedReanimated: focusedInputLayoutHandler, children };
  tmp18 = updateSharedValues;
  tmp19 = updateSharedValues;
  const obj13 = { value: tmp9, children: items2 };
  const Provider = require("module_1836").KeyboardContext.Provider;
  const tmp15 = update;
  if (!updateSharedValues) {
    tmp19 = navigationBarTranslucent;
  }
  if (!tmp18) {
    tmp18 = preserveEdgeToEdge;
  }
  items2 = [setInputHandlers(closure_13, obj14), setInputHandlers(Animated.View, { style: tmp10 })];
  return tmp15(Provider, obj13);
};