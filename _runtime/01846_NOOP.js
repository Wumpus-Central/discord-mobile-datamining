// _runtime/01846_NOOP.js
import noop from "noop";
import { Animated } from "get ActivityIndicator";

let c0;
let createContext;
({ useContext: c0, createContext } = noop);
class NOOP {
  constructor() {
    return;
  }
}
class NESTED_NOOP {
  constructor() {
    return NOOP;
  }
}
c0 = 0;
let obj = {
  value: 0,
  addListener: NOOP,
  removeListener: NOOP,
  modify: NOOP,
  get() {
    return c0;
  },
  set: NOOP
};
c0 = null;
obj = {
  value: null,
  addListener: NOOP,
  removeListener: NOOP,
  modify: NOOP,
  get() {
    return c0;
  },
  set: NOOP
};
obj = { enabled: true, animated: null, reanimated: null, layout: null, update: null, setKeyboardHandlers: null, setInputHandlers: null, setEnabled: null };
const obj1 = { progress: null, height: null };
let value = new Animated.Value(0);
obj1[0] = value;
value = new Animated.Value(0);
obj1[1] = value;
obj[1] = obj1;
obj[2] = { progress: obj, height: obj };
obj[3] = obj;
obj[4] = Promise.resolve;
obj[5] = NESTED_NOOP;
obj[6] = NESTED_NOOP;
obj[7] = NOOP;
const context = createContext(obj);

export const KeyboardContext = context;
export const useKeyboardContext = () => _null(context);