// _runtime/01835_KeyboardController.js
import KeyboardControllerNative2 from "01633_KeyboardControllerNative.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let c3;

let date;
let c2 = true;
let obj = { height: 0, duration: 0, timestamp: date.getTime(), target: -1, type: "default", appearance: "light" };
date = new Date();
let KeyboardEvents = KeyboardControllerNative2.KeyboardEvents;
KeyboardEvents.addListener("keyboardDidHide", (arg0) => {
  c2 = true;
});
const KeyboardEvents2 = KeyboardControllerNative2.KeyboardEvents;
KeyboardEvents2.addListener("keyboardWillShow", (arg0) => {
  c2 = false;
});
let closure_0 = _asyncToGenerator(async function (arg0) {
  closure_0 = arg0;
  if (c3 === 2) {
    c3 = 3;
    const str = "Generator functions may not be called on executing generators";
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
      c3 = 2;
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        let keepFocus;
        if (closure_0 != null) {
          keepFocus = tmp14.keepFocus;
        }
        let c1 = keepFocus;
        if (keepFocus == null) {
          c1 = false;
        }
        closure_0 = c1;
        let animated;
        if (closure_0 != null) {
          animated = tmp14.animated;
        }
        c2 = animated;
        if (animated == null) {
          c2 = true;
        }
        let closure_1 = c2;
        const self = this;
        const self2 = this;
        const promise = new Promise((fn) => {
          closure_0 = fn;
          if (closure_2_2) {
            fn();
          } else {
            const KeyboardEvents = closure_2_0(closure_2_1[1]).KeyboardEvents;
            closure_1 = KeyboardEvents.addListener("keyboardDidHide", () => {
              closure_0(undefined);
              closure_1.remove();
            });
            const KeyboardControllerNative = closure_2_0(closure_2_1[1]).KeyboardControllerNative;
            KeyboardControllerNative.dismiss(closure_0, closure_1);
          }
        });
        c3 = 3;
        obj = { value: promise, done: true };
        return obj;
      }
    } catch (tmp10) {
      c3 = 3;
      throw tmp10;
    }
  }
});
let obj2 = {
  setDefaultMode: KeyboardControllerNative2.KeyboardControllerNative.setDefaultMode,
  setInputMode: KeyboardControllerNative2.KeyboardControllerNative.setInputMode,
  setFocusTo: KeyboardControllerNative2.KeyboardControllerNative.setFocusTo,
  preload: KeyboardControllerNative2.KeyboardControllerNative.preload,
  dismiss(arg0) {
    return closure_0(...arguments);
  },
  isVisible() {
    return !c2;
  },
  state() {
    return obj;
  },
};

export const KeyboardController = obj2;
