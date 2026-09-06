// === Module 1634: ? ===

// Module 1634
import _mod1828 from "module_1828" /* 1828 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1636 */;

require = fn;
let noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useRef: closure_7, useState: closure_8 } = noop);
get_ActivityIndicator = fn(17);
let Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const controlEdgeToEdgeValues = fn(1635);
let closure_12 = controlEdgeToEdgeValues.isEdgeToEdge();
let closure_13 = cancelAnimation.createAnimatedComponent(Animated.createAnimatedComponent(fn(1626).KeyboardControllerView));
const container = StyleSheet.create({ container: { flex: 1 }, hidden: { display: "none", position: "absolute" } });
const android = "android";
const __initData = { code: "function pnpm_animatedTsx1(event,platforms){const{OS,progressSV,heightSV}=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}}" };
const __initData2 = { code: "function pnpm_animatedTsx2(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"ios\"]);}" };
const __initData3 = { code: "function pnpm_animatedTsx3(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
const __initData4 = { code: "function pnpm_animatedTsx4(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\",\"ios\"]);}" };
const __initData5 = { code: "function pnpm_animatedTsx5(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
const __initData6 = { code: "function pnpm_animatedTsx6(e){const{layout}=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}}" };

export const KeyboardProvider = (enabled) => {
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  ({ children, statusBarTranslucent, navigationBarTranslucent, preserveEdgeToEdge } = enabled);
  if (!tmp) {
    tmp = enabled;
  }
  const preload = enabled.preload;
  _require = tmp2;
  const tmp3 = sharedValue1(null);
  dependencyMap = tmp3;
  const tmp4 = _slicedToArray(sharedValue2(tmp), 2);
  enabled = tmp4[0];
  _slicedToArray = tmp4[1];
  let obj = require("module_1825");
  closure_4 = obj.useAnimatedValue(0);
  let obj1 = require("module_1825");
  closure_5 = obj1.useAnimatedValue(0);
  let obj2 = require("cancelAnimation");
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = require("cancelAnimation");
  sharedValue1 = obj3.useSharedValue(0);
  sharedValue2 = require("cancelAnimation").useSharedValue(null);
  const obj5 = require("cancelAnimation");
  Animated = require("module_1825").useEventHandlerRegistration(tmp3);
  const obj6 = require("module_1825");
  const obj7 = require("module_1825");
  const update = closure_4(enabled(function*() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            const KeyboardControllerViewCommands = v3(ref[7]).KeyboardControllerViewCommands;
            const result = KeyboardControllerViewCommands.synchronizeFocusedInputLayout(ref.current);
            const promise = new Promise((arg0) => {
              closure_0 = arg0;
              const FocusedInputEvents = v3(ref[7]).FocusedInputEvents;
              closure_1 = FocusedInputEvents.addListener("layoutDidSynchronize", () => {
                closure_1.remove();
                closure_0(null);
              });
            });
            v3 = 1;
            const obj1 = { value: promise, done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        v3 = tmp;
        throw tmp14;
      }
    }
  }), []);
  let items = [enabled];
  const setInputHandlers = require("module_1825").useEventHandlerRegistration(tmp3);
  const tmp9 = sharedValue(() => {
    let obj = { enabled, animated: null, reanimated: null, layout: null, update: null, setKeyboardHandlers: null, setInputHandlers: null, setEnabled: null };
    obj = { progress, height: Animated.multiply(closure_5, -1) };
    obj.animated = obj;
    obj = { progress: sharedValue, height: sharedValue1 };
    obj.reanimated = obj;
    obj.layout = sharedValue2;
    obj.update = update;
    obj.setKeyboardHandlers = setKeyboardHandlers;
    obj.setInputHandlers = setInputHandlers;
    obj.setEnabled = setEnabled;
    return obj;
  }, items);
  const tmp11 = sharedValue(() => {
    let obj = { nativeEvent: null };
    obj = { progress, height };
    obj.nativeEvent = obj;
    const items = [obj];
    return Animated.event(items, { useNativeDriver: true });
  }, []);
  const updateSharedValues = function _(progress, arr) {
    if (arr.includes(android)) {
      sharedValue.value = progress.progress;
      sharedValue1.value = -progress.height;
    }
  };
  obj = { OS: android, progressSV: sharedValue, heightSV: sharedValue1 };
  updateSharedValues.__closure = obj;
  updateSharedValues.__workletHash = 2170890222740;
  updateSharedValues.__initData = __initData;
  const tmp10 = sharedValue(() => {
    const items = [hidden.hidden, ];
    let obj = { transform: null };
    obj = { translateX };
    const items1 = [obj, ];
    obj = { translateY };
    items1[1] = obj;
    obj.transform = items1;
    items[1] = obj;
    return items;
  }, []);
  obj = { onKeyboardMoveStart: null, onKeyboardMove: null, onKeyboardMoveInteractive: null, onKeyboardMoveEnd: null };
  class D {
    constructor(arg0) {
      if (typeof _ === "function") {
        items = ["ios"];
        tmp = android;
        if (items.includes(android)) {
          tmp2 = enabled;
          tmp3 = closure_6;
          closure_6.value = enabled.progress;
          tmp4 = closure_7;
          closure_7.value = -enabled.height;
        }
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  D.__closure = { updateSharedValues };
  D.__workletHash = 17024171887285;
  D.__initData = __initData2;
  obj.onKeyboardMoveStart = D;
  class C {
    constructor(arg0) {
      if (typeof _ === "function") {
        items = ["android"];
        tmp = android;
        if (items.includes(android)) {
          tmp2 = enabled;
          tmp3 = closure_6;
          closure_6.value = enabled.progress;
          tmp4 = closure_7;
          closure_7.value = -enabled.height;
        }
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  C.__closure = { updateSharedValues };
  C.__workletHash = 9343239356186;
  C.__initData = __initData3;
  obj.onKeyboardMove = C;
  const fn2 = function p(progress) {
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
  obj.onKeyboardMoveInteractive = fn2;
  const fn3 = function v(progress) {
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
  obj.onKeyboardMoveEnd = fn3;
  const obj9 = require("module_1827");
  const animatedKeyboardHandler = require("module_1827").useAnimatedKeyboardHandler(obj, []);
  obj1 = { onFocusedInputLayoutChanged: null };
  class I {
    constructor(arg0) {
      if (-1 !== enabled.target) {
        tmp3 = closure_8;
        closure_8.value = enabled;
      } else {
        tmp = closure_8;
        tmp2 = null;
        closure_8.value = null;
      }
      return;
    }
  }
  I.__closure = { layout: sharedValue2 };
  I.__workletHash = 9857955983587;
  I.__initData = __initData6;
  obj1.onFocusedInputLayoutChanged = I;
  let items1 = [undefined === preload || preload];
  const obj11 = require("module_1827");
  closure_5(() => {
    if (closure_0) {
      const KeyboardController = _mod1828.KeyboardController;
      KeyboardController.preload();
    }
  }, items1);
  obj2 = { value: tmp9, children: null };
  obj3 = { ref: tmp3, enabled, navigationBarTranslucent: null, statusBarTranslucent: null, preserveEdgeToEdge: null, style: null, onKeyboardMoveReanimated: null, onKeyboardMoveStart: "Boolean", onKeyboardMove: "fazol obecn\u00FD", onKeyboardMoveInteractive: "fazole", onKeyboardMoveEnd: "fazolky", onFocusedInputLayoutChangedReanimated: "j\u00EDdlo", children: "ledviny" };
  let tmp18 = updateSharedValues;
  let tmp19 = updateSharedValues;
  if (!updateSharedValues) {
    tmp19 = navigationBarTranslucent;
  }
  obj3.navigationBarTranslucent = tmp19;
  let tmp20 = tmp18;
  if (!tmp18) {
    tmp20 = statusBarTranslucent;
  }
  obj3.statusBarTranslucent = tmp20;
  if (!tmp18) {
    tmp18 = preserveEdgeToEdge;
  }
  obj3.preserveEdgeToEdge = tmp18;
  obj3.style = container.container;
  obj3.onKeyboardMoveReanimated = animatedKeyboardHandler;
  obj3.onKeyboardMove = tmp11;
  obj3.onKeyboardMoveInteractive = tmp11;
  obj3.onKeyboardMoveEnd = tmp11;
  obj3.onFocusedInputLayoutChangedReanimated = require("module_1827").useFocusedInputLayoutHandler(obj1, []);
  obj3.children = children;
  const items2 = [setInputHandlers(closure_13, obj3), setInputHandlers(Animated.View, { style: tmp10 })];
  obj2.children = items2;
  return update(require("NOOP").KeyboardContext.Provider, obj2);
};