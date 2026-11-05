// _runtime/01650_animated.js
import _mod1971 from "metro/01971__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import _slicedToArray from "metro/00032__.js";
import noop_mod from "metro/00019__.js";
import 01652__ from "metro/01652__.js";

const require = globalThis.__r;

require = fn;
let noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: closure_6, useRef: metroImportDefault, useState: closure_8 } = noop);
let noop = noop_mod;
get_ActivityIndicator = fn(17);
let Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const controlEdgeToEdgeValues = fn(1651);
let closure_12 = controlEdgeToEdgeValues.isEdgeToEdge();
let closure_13 = module_1652.createAnimatedComponent(Animated.createAnimatedComponent(fn(1642).KeyboardControllerView));
const container = StyleSheet.create({ container: { flex: 1 }, hidden: { display: "none", position: "absolute" } });
let closure_15 = { code: "(function pnpm_animatedTsx1(event,platforms){let[OS,progressSV,heightSV]=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}})" };
let closure_16 = { code: "(function pnpm_animatedTsx2(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"ios\"]);})" };
let closure_17 = { code: "(function pnpm_animatedTsx3(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"android\"]);})" };
let closure_18 = { code: "(function pnpm_animatedTsx4(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"android\",\"ios\"]);})" };
let closure_19 = { code: "(function pnpm_animatedTsx5(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"android\"]);})" };
let closure_20 = { code: "(function pnpm_animatedTsx6(e){let[layout]=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}})" };

export (enabled) => {
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  ({ children, statusBarTranslucent, navigationBarTranslucent, preserveEdgeToEdge } = enabled);
  if (!tmp) {
    tmp = enabled;
  }
  const preload = enabled.preload;
  _require = tmp2;
  const tmp3 = sharedValue1(null);
  [first, _slicedToArray] = sharedValue2(tmp);
  asyncGeneratorStep = first;
  closure_4 = require("metro/01968__.js").useAnimatedValue(0);
  let obj = require("metro/01968__.js");
  closure_5 = require("metro/01968__.js").useAnimatedValue(0);
  let obj2 = require("metro/01968__.js");
  const sharedValue = require("metro/01652__.js").useSharedValue(0);
  let obj3 = require("metro/01652__.js");
  sharedValue1 = require("metro/01652__.js").useSharedValue(0);
  let obj4 = require("metro/01652__.js");
  sharedValue2 = require("metro/01652__.js").useSharedValue(null);
  const obj5 = require("metro/01652__.js");
  Animated = require("metro/01968__.js").useEventHandlerRegistration(tmp3);
  const obj6 = require("metro/01968__.js");
  const obj7 = require("metro/01968__.js");
  const update = closure_4(asyncGeneratorStep(async () => {
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
  }), []);
  items = [first];
  const setInputHandlers = require("metro/01968__.js").useEventHandlerRegistration(tmp3);
  const tmp11 = sharedValue(() => {
    const obj = { enabled, animated: { progress, height: Animated.multiply(closure_5, -1) }, reanimated: { progress: sharedValue, height: sharedValue1 }, layout: sharedValue2, update, setKeyboardHandlers, setInputHandlers, setEnabled };
    return obj;
  }, items);
  const tmp13 = sharedValue(() => {
    const obj = { nativeEvent: { progress, height } };
    items = [obj];
    return Animated.event(items, { useNativeDriver: true });
  }, []);
  let items1 = [closure_15, "android", sharedValue, sharedValue1];
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  [tmp14, tmp15, tmp16, tmp17] = items1;
  function pnpm_animatedTsx1(progress, arr) {
    if (arr.includes(c0)) {
      c1.value = progress.progress;
      c2.value = -progress.height;
    }
  }
  const items2 = [tmp15, tmp16, tmp17];
  pnpm_animatedTsx1.__closure = items2;
  pnpm_animatedTsx1.__workletHash = 12673803440141;
  pnpm_animatedTsx1.__initData = tmp14;
  const tmp12 = sharedValue(() => {
    items = [hidden.hidden, ];
    const obj = { transform: null };
    const items1 = [{ translateX }, { translateY }];
    obj.transform = items1;
    items[1] = obj;
    return items;
  }, []);
  const items3 = [closure_16, pnpm_animatedTsx1];
  [tmp18, tmp19] = items3;
  const obj8 = { onKeyboardMoveStart: null, onKeyboardMove: null, onKeyboardMoveInteractive: null, onKeyboardMoveEnd: null };
  function pnpm_animatedTsx2(arg0) {
    _undefined(arg0, ["ios"]);
  }
  const items4 = [tmp19];
  pnpm_animatedTsx2.__closure = items4;
  pnpm_animatedTsx2.__workletHash = 15897406011308;
  pnpm_animatedTsx2.__initData = tmp18;
  obj8.onKeyboardMoveStart = pnpm_animatedTsx2;
  const items5 = [closure_17, pnpm_animatedTsx1];
  [tmp20, tmp21] = items5;
  function pnpm_animatedTsx3(arg0) {
    _undefined(arg0, ["android"]);
  }
  const items6 = [tmp21];
  pnpm_animatedTsx3.__closure = items6;
  pnpm_animatedTsx3.__workletHash = 3503338460579;
  pnpm_animatedTsx3.__initData = tmp20;
  obj8.onKeyboardMove = pnpm_animatedTsx3;
  const items7 = [closure_18, pnpm_animatedTsx1];
  [tmp22, tmp23] = items7;
  function pnpm_animatedTsx4(arg0) {
    _undefined(arg0, ["android", "ios"]);
  }
  const items8 = [tmp23];
  pnpm_animatedTsx4.__closure = items8;
  pnpm_animatedTsx4.__workletHash = 4479201835645;
  pnpm_animatedTsx4.__initData = tmp22;
  obj8.onKeyboardMoveInteractive = pnpm_animatedTsx4;
  const items9 = [closure_19, pnpm_animatedTsx1];
  _require = undefined;
  [tmp24, tmp25] = items9;
  function pnpm_animatedTsx5(arg0) {
    _undefined(arg0, ["android"]);
  }
  const items10 = [tmp25];
  pnpm_animatedTsx5.__closure = items10;
  pnpm_animatedTsx5.__workletHash = 8054499004197;
  pnpm_animatedTsx5.__initData = tmp24;
  obj8.onKeyboardMoveEnd = pnpm_animatedTsx5;
  const tmp6Result = require("reanimatedNative");
  const animatedKeyboardHandler = require("reanimatedNative").useAnimatedKeyboardHandler(obj8, []);
  const items11 = [closure_20, sharedValue2];
  _require = undefined;
  [tmp27, tmp28] = items11;
  const obj9 = { onFocusedInputLayoutChanged: null };
  function pnpm_animatedTsx6(target) {
    if (-1 !== target.target) {
      c0.value = target;
    } else {
      c0.value = null;
    }
  }
  const items12 = [tmp28];
  pnpm_animatedTsx6.__closure = items12;
  pnpm_animatedTsx6.__workletHash = 12222184660346;
  pnpm_animatedTsx6.__initData = tmp27;
  obj9.onFocusedInputLayoutChanged = pnpm_animatedTsx6;
  const items13 = [undefined === preload || preload];
  const tmp6Result2 = require("reanimatedNative");
  closure_5(() => {
    if (c0) {
      const KeyboardController = _mod1971.KeyboardController;
      KeyboardController.preload();
    }
  }, items13);
  const obj10 = { value: tmp11, children: null };
  const obj11 = { ref: tmp3, enabled: first, navigationBarTranslucent: null, statusBarTranslucent: null, preserveEdgeToEdge: null, style: null, onKeyboardMoveReanimated: null, onKeyboardMoveStart: "Boolean", onKeyboardMove: "image/png", onKeyboardMoveInteractive: "mobile", onKeyboardMoveEnd: null, onFocusedInputLayoutChangedReanimated: "nl-BQ", children: "nl" };
  let tmp34 = closure_12;
  let tmp35 = closure_12;
  if (!closure_12) {
    tmp35 = navigationBarTranslucent;
  }
  obj11.navigationBarTranslucent = tmp35;
  let tmp36 = tmp34;
  if (!tmp34) {
    tmp36 = statusBarTranslucent;
  }
  obj11.statusBarTranslucent = tmp36;
  if (!tmp34) {
    tmp34 = preserveEdgeToEdge;
  }
  obj11.preserveEdgeToEdge = tmp34;
  obj11.style = container.container;
  obj11.onKeyboardMoveReanimated = animatedKeyboardHandler;
  obj11.onKeyboardMove = tmp13;
  obj11.onKeyboardMoveInteractive = tmp13;
  obj11.onKeyboardMoveEnd = tmp13;
  obj11.onFocusedInputLayoutChangedReanimated = require("reanimatedNative").useFocusedInputLayoutHandler(obj9, []);
  obj11.children = children;
  const items14 = [setInputHandlers(closure_13, obj11), setInputHandlers(Animated.View, { style: tmp12 })];
  obj10.children = items14;
  return update(require("NOOP").KeyboardContext.Provider, obj10);
}