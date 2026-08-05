// _runtime/01604_Animated.js
import closure_2 from "controlEdgeToEdgeValues";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import controlEdgeToEdgeValues from "controlEdgeToEdgeValues";

let Platform;
let StyleSheet;
let c10;
let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
let require = arg1;
({ useCallback: c4, useEffect: c5, useMemo: closure_6, useRef: error, useState: metroImportAll } = noop);
let Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
controlEdgeToEdgeValues = controlEdgeToEdgeValues.isEdgeToEdge();
let closure_13 = require("cancelAnimation").createAnimatedComponent(Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardControllerView));
const styles = StyleSheet.create({ container: { flex: 1 }, hidden: { display: "none", position: "absolute" } });
const android = "android";
let closure_16 = { code: "function pnpm_animatedTsx1(event,platforms){const{OS,progressSV,heightSV}=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}}" };
let closure_17 = { code: "function pnpm_animatedTsx2(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"ios\"]);}" };
let closure_18 = { code: "function pnpm_animatedTsx3(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
let closure_19 = { code: "function pnpm_animatedTsx4(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\",\"ios\"]);}" };
let closure_20 = { code: "function pnpm_animatedTsx5(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
let closure_21 = { code: "function pnpm_animatedTsx6(e){const{layout}=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}}" };

export const KeyboardProvider = (enabled) => {
  let children;
  let navigationBarTranslucent;
  let preserveEdgeToEdge;
  let statusBarTranslucent;
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  ({ children, statusBarTranslucent, navigationBarTranslucent, preserveEdgeToEdge } = enabled);
  if (!tmp) {
    tmp = enabled;
  }
  const preload = enabled.preload;
  const require = tmp2;
  const tmp3 = sharedValue1(null);
  const dependencyMap = tmp3;
  const tmp4 = callback(sharedValue2(tmp), 2);
  const first = tmp4[0];
  callback = tmp4[1];
  let obj = require(1795) /* useEventHandlerRegistration */;
  const callback2 = obj.useAnimatedValue(0);
  let obj1 = require(1795) /* useEventHandlerRegistration */;
  const callback3 = obj1.useAnimatedValue(0);
  let obj2 = require(1606) /* cancelAnimation */;
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = require(1606) /* cancelAnimation */;
  sharedValue1 = obj3.useSharedValue(0);
  sharedValue2 = require(1606) /* cancelAnimation */.useSharedValue(null);
  const obj5 = require(1606) /* cancelAnimation */;
  const Animated = require(1795) /* useEventHandlerRegistration */.useEventHandlerRegistration(tmp3);
  const obj6 = require(1795) /* useEventHandlerRegistration */;
  let closure_10 = require(1795) /* useEventHandlerRegistration */.useEventHandlerRegistration(tmp3);
  let closure_11 = callback2(first(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const KeyboardControllerViewCommands = v0(ref[7]).KeyboardControllerViewCommands;
            const result = KeyboardControllerViewCommands.synchronizeFocusedInputLayout(ref.current);
            const promise = new Promise((arg0) => {
              const v3 = arg0;
              const FocusedInputEvents = v3(table[7]).FocusedInputEvents;
              table = FocusedInputEvents.addListener("layoutDidSynchronize", () => {
                closure_1.remove();
                callback(null);
              });
            });
            v0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = promise;
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        v0 = tmp;
        throw tmp14;
      }
    }
  }), []);
  let items = [first];
  const obj7 = require(1795) /* useEventHandlerRegistration */;
  const tmp9 = sharedValue(() => {
    let obj = { enabled: first, animated: null, reanimated: null, layout: null, update: null, setKeyboardHandlers: null, setInputHandlers: null, setEnabled: null };
    obj = { progress: closure_4, height: closure_9.multiply(closure_5, -1) };
    obj[1] = obj;
    obj = { progress: sharedValue, height: sharedValue1 };
    obj[2] = obj;
    obj[3] = sharedValue2;
    obj[4] = closure_11;
    obj[5] = closure_9;
    obj[6] = closure_10;
    obj[7] = _slicedToArray;
    return obj;
  }, items);
  const tmp11 = sharedValue(() => {
    const items = [{ nativeEvent: { progress: closure_4, height: closure_5 } }];
    return closure_9.event(items, { useNativeDriver: true });
  }, []);
  const fn = function _(progress, arr) {
    if (arr.includes(outer1_15)) {
      sharedValue.value = progress.progress;
      sharedValue1.value = -progress.height;
    }
  };
  obj = { OS: android, progressSV: sharedValue, heightSV: sharedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 2170890222740;
  fn.__initData = closure_16;
  const tmp10 = sharedValue(() => {
    const items = [outer1_14.hidden, ];
    let obj = { translateX: closure_5 };
    const items1 = [obj, ];
    obj = { translateY: closure_4 };
    items1[1] = obj;
    items[1] = { transform: items1 };
    return items;
  }, []);
  obj = { onKeyboardMoveStart: null, onKeyboardMove: null, onKeyboardMoveInteractive: null, onKeyboardMoveEnd: null };
  class D {
    constructor(arg0) {
      if (typeof _ !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      items = ["ios"];
      if (items.includes(outer1_15)) {
        tmp = enabled;
        tmp2 = closure_6;
        closure_6.value = enabled.progress;
        tmp3 = closure_7;
        closure_7.value = -enabled.height;
      }
      return;
    }
  }
  D.__closure = { updateSharedValues: fn };
  D.__workletHash = 17024171887285;
  D.__initData = closure_17;
  obj[0] = D;
  class C {
    constructor(arg0) {
      if (typeof _ !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      items = ["android"];
      if (items.includes(outer1_15)) {
        tmp = enabled;
        tmp2 = closure_6;
        closure_6.value = enabled.progress;
        tmp3 = closure_7;
        closure_7.value = -enabled.height;
      }
      return;
    }
  }
  C.__closure = { updateSharedValues: fn };
  C.__workletHash = 9343239356186;
  C.__initData = closure_18;
  obj[1] = C;
  const fn2 = function p(progress) {
    if (typeof fn !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const items = ["android", "ios"];
    if (items.includes(outer1_15)) {
      sharedValue.value = progress.progress;
      sharedValue1.value = -progress.height;
    }
  };
  fn2.__closure = { updateSharedValues: fn };
  fn2.__workletHash = 9270729921284;
  fn2.__initData = closure_19;
  obj[2] = fn2;
  const fn3 = function v(progress) {
    if (typeof fn !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const items = ["android"];
    if (items.includes(outer1_15)) {
      sharedValue.value = progress.progress;
      sharedValue1.value = -progress.height;
    }
  };
  fn3.__closure = { updateSharedValues: fn };
  fn3.__workletHash = 10129400155228;
  fn3.__initData = closure_20;
  obj[3] = fn3;
  const obj9 = require(1797) /* useAnimatedKeyboardHandler */;
  const animatedKeyboardHandler = require(1797) /* useAnimatedKeyboardHandler */.useAnimatedKeyboardHandler(obj, []);
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
  I.__initData = closure_21;
  obj1[0] = I;
  let items1 = [undefined === preload || preload];
  const obj11 = require(1797) /* useAnimatedKeyboardHandler */;
  callback3(() => {
    if (tmp2) {
      const KeyboardController = tmp2(tmp3[10]).KeyboardController;
      KeyboardController.preload();
    }
  }, items1);
  obj2 = { value: tmp9, children: null };
  obj3 = { ref: tmp3, enabled: first, navigationBarTranslucent: null, statusBarTranslucent: null, preserveEdgeToEdge: null, style: null, onKeyboardMoveReanimated: null, onKeyboardMoveStart: "Boolean", onKeyboardMove: "function pnpm_indexTs1(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onKeyboardMoveStart\")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith(\"onKeyboardMove\")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith(\"onKeyboardMoveEnd\")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith(\"onKeyboardMoveInteractive\")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}}", onKeyboardMoveInteractive: "function pnpm_indexTs2(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onFocusedInputTextChanged\")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith(\"onFocusedInputSelectionChanged\")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}}", onKeyboardMoveEnd: "M1.99999 9H2.99999V8H1.99999V9Z", onFocusedInputLayoutChangedReanimated: "white", children: 563165519675457.9 };
  let tmp18 = fn;
  let tmp19 = fn;
  if (!fn) {
    tmp19 = navigationBarTranslucent;
  }
  obj3[2] = tmp19;
  let tmp20 = tmp18;
  if (!tmp18) {
    tmp20 = statusBarTranslucent;
  }
  obj3[3] = tmp20;
  if (!tmp18) {
    tmp18 = preserveEdgeToEdge;
  }
  obj3[4] = tmp18;
  obj3[5] = container.container;
  obj3[6] = animatedKeyboardHandler;
  obj3[8] = tmp11;
  obj3[9] = tmp11;
  obj3[10] = tmp11;
  obj3[11] = require(1797) /* useAnimatedKeyboardHandler */.useFocusedInputLayoutHandler(obj1, []);
  obj3[12] = children;
  const items2 = [closure_10(closure_13, obj3), closure_10(Animated.View, { style: tmp10 })];
  obj2[1] = items2;
  return closure_11(require(1799) /* NOOP */.KeyboardContext.Provider, obj2);
};