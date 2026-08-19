// _runtime/01851_getLatestState.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";

const require = fn;
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
  closure_0 = tmp;
  const tmp2 = callback(callback3(() => {
    if (typeof getLatestState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = {};
    const KeyboardController = callback(1846).KeyboardController;
    const merged = Object.assign(KeyboardController.state());
    const KeyboardController2 = callback(1846).KeyboardController;
    obj.isVisible = KeyboardController2.isVisible();
    return callback(obj);
  }), 2);
  closure_1 = tmp2[1];
  callback2(() => {
    const callback = closure_1_5.map((item, index) => {
      const KeyboardEvents = lib(closure_1_1[3]).KeyboardEvents;
      return KeyboardEvents.addListener(item, () => {
        if (typeof closure_1_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = {};
        const KeyboardController = closure_1_0(closure_1_1[2]).KeyboardController;
        const merged = Object.assign(KeyboardController.state());
        const KeyboardController2 = closure_1_0(closure_1_1[2]).KeyboardController;
        obj.isVisible = KeyboardController2.isVisible();
        return callback2(callback(obj));
      });
    });
    if (typeof getLatestState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = {};
    let KeyboardController = callback(1846).KeyboardController;
    let merged = Object.assign(KeyboardController.state());
    let KeyboardController2 = callback(1846).KeyboardController;
    obj.isVisible = KeyboardController2.isVisible();
    dependencyMap(callback(obj));
    return () => {
      const item = lib.forEach((item, index) => item.remove());
    };
  }, []);
  return tmp2[0];
};