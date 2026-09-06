// === Module 1828: ? ===

// Module 1828
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let c2 = true;
let obj = { height: 0, duration: 0, timestamp: null, target: -1, type: "default", appearance: "light" };
obj.timestamp = new Date().getTime();
let global = obj;
let KeyboardEvents = fn(1626).KeyboardEvents;
KeyboardEvents.addListener("keyboardDidHide", (arg0) => {
  c2 = true;
  global = arg0;
});
const KeyboardEvents2 = fn(1626).KeyboardEvents;
KeyboardEvents2.addListener("keyboardWillShow", (arg0) => {
  c2 = false;
  global = arg0;
});
let closure_0 = asyncGeneratorStep(async (arg0) => {
  if (c3 === 2) {
    c3 = 3;
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
      c3 = 2;
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        let keepFocus;
        if (closure_0 != null) {
          keepFocus = tmp18.keepFocus;
        }
        c1 = keepFocus;
        if (keepFocus == null) {
          c1 = false;
        }
        closure_0 = c1;
        let animated;
        if (closure_0 != null) {
          animated = tmp18.animated;
        }
        c2 = animated;
        if (animated == null) {
          c2 = true;
        }
        dependencyMap = c2;
        const promise = new Promise((fn) => {
          closure_0 = fn;
          if (c2) {
            fn();
          } else {
            const KeyboardEvents = closure_0(1626).KeyboardEvents;
            closure_1 = KeyboardEvents.addListener("keyboardDidHide", () => {
              closure_0(undefined);
              closure_1.remove();
            });
            const KeyboardControllerNative = closure_0(1626).KeyboardControllerNative;
            KeyboardControllerNative.dismiss(closure_0, closure_1);
          }
        });
        c3 = 3;
        obj = { value: promise, done: true };
        return obj;
      }
    } catch (tmp13) {
      c3 = tmp;
      throw tmp13;
    }
  }
});
obj = {
  setDefaultMode: fn(1626).KeyboardControllerNative.setDefaultMode,
  setInputMode: fn(1626).KeyboardControllerNative.setInputMode,
  setFocusTo: fn(1626).KeyboardControllerNative.setFocusTo,
  preload: fn(1626).KeyboardControllerNative.preload,
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
    return global;
  }
};

export const KeyboardController = obj;