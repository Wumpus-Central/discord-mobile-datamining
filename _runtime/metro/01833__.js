// _runtime/metro/01833__.js
import _mod1828 from "01828__.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);
let closure_5 = ["keyboardWillShow", "keyboardDidHide"];
function getLatestState() {}
function defaultSelector(arg0) {
  return arg0;
}

export const useKeyboardState = function useKeyboardState(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = defaultSelector;
  }
  closure_0 = tmp;
  const tmp2 = _slicedToArray(
    closure_4(() => {
      if (typeof getLatestState === "function") {
        const obj = {};
        const KeyboardController = _mod1828.KeyboardController;
        const merged = Object.assign(KeyboardController.state());
        const KeyboardController2 = _mod1828.KeyboardController;
        obj.isVisible = KeyboardController2.isVisible();
        return tmp(obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }),
    2,
  );
  dependencyMap = tmp2[1];
  closure_3(() => {
    closure_0 = closure_1_5.map((item) => {
      const KeyboardEvents = closure_0(1626).KeyboardEvents;
      return KeyboardEvents.addListener(item, () => {
        if (typeof closure_2_6 === "function") {
          const obj = {};
          const KeyboardController = closure_0(1828).KeyboardController;
          const merged = Object.assign(KeyboardController.state());
          const KeyboardController2 = closure_0(1828).KeyboardController;
          obj.isVisible = KeyboardController2.isVisible();
          return tmp(tmp2(obj));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    });
    if (typeof getLatestState === "function") {
      let obj = {};
      let KeyboardController = closure_0(1828).KeyboardController;
      let merged = Object.assign(KeyboardController.state());
      let KeyboardController2 = closure_0(1828).KeyboardController;
      obj.isVisible = KeyboardController2.isVisible();
      tmp(tmp2(obj));
      return () => {
        const item = closure_0.forEach((remove) => remove.remove());
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, []);
  return tmp2[0];
};
