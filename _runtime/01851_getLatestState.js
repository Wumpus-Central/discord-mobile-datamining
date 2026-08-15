// _runtime/01851_getLatestState.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
let require = arg1;
({ useEffect: c3, useState: c4 } = noop);
let closure_5 = ["keyboardWillShow", "keyboardDidHide"];
function getLatestState() {

}
function defaultSelector(arg0) {
  return arg0;
}

export const useKeyboardState = function useKeyboardState(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = defaultSelector;
  }
  const require = tmp;
  let closure_1;
  const tmp2 = callback(callback3(() => {
    if (typeof outer1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = {};
    const KeyboardController = tmp(1846).KeyboardController;
    const merged = Object.assign(KeyboardController.state());
    const KeyboardController2 = tmp(1846).KeyboardController;
    obj.isVisible = KeyboardController2.isVisible();
    return tmp(obj);
  }), 2);
  closure_1 = tmp2[1];
  callback2(() => {
    let tmp = outer1_5.map((arg0) => {
      const KeyboardEvents = lib(outer1_1[3]).KeyboardEvents;
      return KeyboardEvents.addListener(arg0, () => {
        if (typeof outer1_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = {};
        const KeyboardController = outer1_0(outer1_1[2]).KeyboardController;
        const merged = Object.assign(KeyboardController.state());
        const KeyboardController2 = outer1_0(outer1_1[2]).KeyboardController;
        obj.isVisible = KeyboardController2.isVisible();
        return closure_1(closure_0(obj));
      });
    });
    tmp = dependencyMap;
    if (typeof outer1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = {};
    let KeyboardController = tmp(1846).KeyboardController;
    let merged = Object.assign(KeyboardController.state());
    let KeyboardController2 = tmp(1846).KeyboardController;
    obj.isVisible = KeyboardController2.isVisible();
    tmp(tmp(obj));
    return () => {
      const item = lib.forEach((remove) => remove.remove());
    };
  }, []);
  return tmp2[0];
};