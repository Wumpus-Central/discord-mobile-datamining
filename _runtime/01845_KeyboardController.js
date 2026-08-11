// _runtime/01845_KeyboardController.js
import importDefaultResult from "asyncGeneratorStep";
import { KeyboardEvents } from "nativeEventEmitter";
import { KeyboardEvents as KeyboardEvents2 } from "nativeEventEmitter";

let closure_0 = arg1;
let c2 = true;
let obj = { height: 0, duration: 0, timestamp: null, target: -1, type: "default", appearance: "light" };
obj[2] = new Date().getTime();
KeyboardEvents.addListener("keyboardDidHide", (arg0) => {
  let c2 = true;
  let closure_3 = arg0;
});
KeyboardEvents2.addListener("keyboardWillShow", (arg0) => {
  let c2 = false;
  let closure_3 = arg0;
});
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  return (function*(arg0) {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let keepFocus;
          if (closure_0 != null) {
            keepFocus = tmp19.keepFocus;
          }
          let closure_1 = keepFocus;
          if (keepFocus == null) {
            closure_1 = false;
          }
          closure_0 = closure_1;
          let animated;
          if (closure_0 != null) {
            animated = tmp19.animated;
          }
          let c2 = animated;
          if (animated == null) {
            c2 = true;
          }
          closure_1 = c2;
          const promise = new Promise((arg0) => {
            const callback = arg0;
            if (c2) {
              arg0();
            } else {
              const KeyboardEvents = callback(1643).KeyboardEvents;
              const dependencyMap = KeyboardEvents.addListener("keyboardDidHide", () => {
                callback(undefined);
                closure_1.remove();
              });
              const KeyboardControllerNative = callback(1643).KeyboardControllerNative;
              KeyboardControllerNative.dismiss(callback, dependencyMap);
            }
          });
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = promise;
          return obj;
        }
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  })();
});
obj = {
  setDefaultMode: require("nativeEventEmitter").KeyboardControllerNative.setDefaultMode,
  setInputMode: require("nativeEventEmitter").KeyboardControllerNative.setInputMode,
  setFocusTo: require("nativeEventEmitter").KeyboardControllerNative.setFocusTo,
  preload: require("nativeEventEmitter").KeyboardControllerNative.preload,
  dismiss(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  isVisible() {
    return !c2;
  },
  state() {
    return obj;
  }
};

export const KeyboardController = obj;