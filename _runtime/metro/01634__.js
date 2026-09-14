// _runtime/metro/01634__.js
import _mod1828 from "01828__.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import _slicedToArray from "00032__.js";
import noop_mod from "00019__.js";
import cancelAnimation from "../01636_cancelAnimation.js";

const require = globalThis.__r;

require = fn;
let noop = fn(19);
({
  useCallback: closure_4,
  useEffect: hasOwnProperty,
  useMemo: metroRequire,
  useRef: closure_7,
  useState: closure_8,
} = noop);
let noop = noop_mod;
get_ActivityIndicator = fn(17);
let Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const controlEdgeToEdgeValues = fn(1635);
let closure_12 = controlEdgeToEdgeValues.isEdgeToEdge();
let closure_13 = cancelAnimation.createAnimatedComponent(
  Animated.createAnimatedComponent(fn(1626).KeyboardControllerView),
);
const container = StyleSheet.create({ container: { flex: 1 }, hidden: { display: "none", position: "absolute" } });
const android = "android";
const __initData = {
  code: "function pnpm_animatedTsx1(event,platforms){const{OS,progressSV,heightSV}=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}}",
};
const __initData2 = {
  code: 'function pnpm_animatedTsx2(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["ios"]);}',
};
const __initData3 = {
  code: 'function pnpm_animatedTsx3(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["android"]);}',
};
const __initData4 = {
  code: 'function pnpm_animatedTsx4(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["android","ios"]);}',
};
const __initData5 = {
  code: 'function pnpm_animatedTsx5(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["android"]);}',
};
const __initData6 = {
  code: "function pnpm_animatedTsx6(e){const{layout}=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}}",
};

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
  [enabled, _slicedToArray] = sharedValue2(tmp);
  closure_4 = require("01825__.js").useAnimatedValue(0);
  let obj = require("01825__.js");
  closure_5 = require("01825__.js").useAnimatedValue(0);
  let obj2 = require("01825__.js");
  const sharedValue = require("cancelAnimation").useSharedValue(0);
  let obj3 = require("cancelAnimation");
  sharedValue1 = require("cancelAnimation").useSharedValue(0);
  let obj4 = require("cancelAnimation");
  sharedValue2 = require("cancelAnimation").useSharedValue(null);
  const obj5 = require("cancelAnimation");
  Animated = require("01825__.js").useEventHandlerRegistration(tmp3);
  const obj6 = require("01825__.js");
  const obj7 = require("01825__.js");
  const update = closure_4(
    enabled(function* () {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          v3 = tmp;
          throw tmp14;
        }
      }
    }),
    [],
  );
  let items = [enabled];
  const setInputHandlers = require("01825__.js").useEventHandlerRegistration(tmp3);
  const tmp9 = sharedValue(() => {
    const obj = {
      enabled,
      animated: { progress, height: Animated.multiply(closure_5, -1) },
      reanimated: { progress: sharedValue, height: sharedValue1 },
      layout: sharedValue2,
      update,
      setKeyboardHandlers,
      setInputHandlers,
      setEnabled,
    };
    return obj;
  }, items);
  const tmp11 = sharedValue(() => {
    const obj = { nativeEvent: { progress, height } };
    const items = [obj];
    return Animated.event(items, { useNativeDriver: true });
  }, []);
  const updateSharedValues = function _(progress, arr) {
    if (arr.includes(android)) {
      sharedValue.value = progress.progress;
      sharedValue1.value = -progress.height;
    }
  };
  updateSharedValues.__closure = { OS: android, progressSV: sharedValue, heightSV: sharedValue1 };
  updateSharedValues.__workletHash = 2170890222740;
  updateSharedValues.__initData = __initData;
  const obj8 = { OS: android, progressSV: sharedValue, heightSV: sharedValue1 };
  const tmp10 = sharedValue(() => {
    const items = [hidden.hidden];
    const obj = { transform: null };
    const items1 = [{ translateX }, { translateY }];
    obj.transform = items1;
    items[1] = obj;
    return items;
  }, []);
  const obj10 = {
    onKeyboardMoveStart: null,
    onKeyboardMove: null,
    onKeyboardMoveInteractive: null,
    onKeyboardMoveEnd: null,
  };
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
  obj10.onKeyboardMoveStart = D;
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
  obj10.onKeyboardMove = C;
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
  obj10.onKeyboardMoveInteractive = fn2;
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
  obj10.onKeyboardMoveEnd = fn3;
  const obj9 = require("01827__.js");
  const animatedKeyboardHandler = require("01827__.js").useAnimatedKeyboardHandler(obj10, []);
  const obj12 = { onFocusedInputLayoutChanged: null };
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
  obj12.onFocusedInputLayoutChanged = I;
  let items1 = [undefined === preload || preload];
  const obj11 = require("01827__.js");
  closure_5(() => {
    if (closure_0) {
      const KeyboardController = _mod1828.KeyboardController;
      KeyboardController.preload();
    }
  }, items1);
  const obj13 = { value: tmp9, children: null };
  const obj14 = {
    ref: tmp3,
    enabled,
    navigationBarTranslucent: null,
    statusBarTranslucent: null,
    preserveEdgeToEdge: null,
    style: null,
    onKeyboardMoveReanimated: null,
    onKeyboardMoveStart: "Boolean",
    onKeyboardMove: "es-CL",
    onKeyboardMoveInteractive: "es-419",
    onKeyboardMoveEnd: null,
    onFocusedInputLayoutChangedReanimated: null,
    children: null,
  };
  let tmp18 = updateSharedValues;
  let tmp19 = updateSharedValues;
  if (!updateSharedValues) {
    tmp19 = navigationBarTranslucent;
  }
  obj14.navigationBarTranslucent = tmp19;
  let tmp20 = tmp18;
  if (!tmp18) {
    tmp20 = statusBarTranslucent;
  }
  obj14.statusBarTranslucent = tmp20;
  if (!tmp18) {
    tmp18 = preserveEdgeToEdge;
  }
  obj14.preserveEdgeToEdge = tmp18;
  obj14.style = container.container;
  obj14.onKeyboardMoveReanimated = animatedKeyboardHandler;
  obj14.onKeyboardMove = tmp11;
  obj14.onKeyboardMoveInteractive = tmp11;
  obj14.onKeyboardMoveEnd = tmp11;
  obj14.onFocusedInputLayoutChangedReanimated = require("01827__.js").useFocusedInputLayoutHandler(obj12, []);
  obj14.children = children;
  const items2 = [setInputHandlers(closure_13, obj14), setInputHandlers(Animated.View, { style: tmp10 })];
  obj13.children = items2;
  return update(require("NOOP").KeyboardContext.Provider, obj13);
};
