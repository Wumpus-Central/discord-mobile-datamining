// === Module 1850: getLatestState ===

// Module 1850 (getLatestState)
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = arg1;
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
  closure_1 = undefined;
  const tmp2 = callback(callback3(() => {
    if (typeof closure_1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = {};
    const KeyboardController = callback(1845).KeyboardController;
    const merged = Object.assign(KeyboardController.state());
    const KeyboardController2 = callback(1845).KeyboardController;
    obj.isVisible = KeyboardController2.isVisible();
    return callback(obj);
  }), 2);
  closure_1 = tmp2[1];
  callback2(() => {
    const callback = closure_1_5.map((arg0) => {
      const KeyboardEvents = lib(closure_1_1[3]).KeyboardEvents;
      return KeyboardEvents.addListener(arg0, () => {
        if (typeof closure_1_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = {};
        const KeyboardController = closure_1_0(closure_1_1[2]).KeyboardController;
        const merged = Object.assign(KeyboardController.state());
        const KeyboardController2 = closure_1_0(closure_1_1[2]).KeyboardController;
        obj.isVisible = KeyboardController2.isVisible();
        return closure_1(closure_0(obj));
      });
    });
    if (typeof closure_1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = {};
    let KeyboardController = callback(1845).KeyboardController;
    let merged = Object.assign(KeyboardController.state());
    let KeyboardController2 = callback(1845).KeyboardController;
    obj.isVisible = KeyboardController2.isVisible();
    dependencyMap(callback(obj));
    return () => {
      const item = lib.forEach((remove) => remove.remove());
    };
  }, []);
  return tmp2[0];
};