// === Module 5495: JSResponderContext ===

// Module 5495 (JSResponderContext)
import noop from "module_19" /* 19 */;

const TextInput = fn(17).TextInput;
let global = false;
let closure_2 = false;

export const JSResponderContext = noop.createContext(null);
export function updateResponderEventValue(isRNGHResponderEvent, current) {
  isRNGHResponderEvent = undefined;
  if (isRNGHResponderEvent != null) {
    isRNGHResponderEvent = isRNGHResponderEvent.isRNGHResponderEvent;
  }
  if (isRNGHResponderEvent) {
    isRNGHResponderEvent.current = current;
  }
}
export function setKeyboardVisibility(arg0) {
  let tmp = arg0;
  global = arg0;
  if (arg0) {
    const State = TextInput.State;
    const currentlyFocusedInput = State.currentlyFocusedInput;
    let result;
    if (currentlyFocusedInput != null) {
      result = currentlyFocusedInput();
    }
    tmp = null != result;
  }
  closure_2 = tmp;
}
export function isKeyboardDismissingTap(keyboardShouldPersistTaps) {
  if (null == keyboardShouldPersistTaps) {
    return false;
  } else {
    keyboardShouldPersistTaps = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
    let tmp = !keyboardShouldPersistTaps;
    if (keyboardShouldPersistTaps) {
      tmp = "never" === keyboardShouldPersistTaps;
    }
    if (tmp) {
      tmp = global;
    }
    if (tmp) {
      let tmp2 = closure_2;
      if (!closure_2) {
        const State = TextInput.State;
        const currentlyFocusedInput = State.currentlyFocusedInput;
        let result;
        if (currentlyFocusedInput != null) {
          result = currentlyFocusedInput();
        }
        tmp2 = null != result;
      }
      tmp = tmp2;
    }
    return tmp;
  }
}