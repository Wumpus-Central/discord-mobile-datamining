// _runtime/01829_NOOP.js
import _mod17 from "metro/00017__.js";
import noop from "metro/00019__.js";

({ useContext: closure_0, createContext } = noop);
const Animated = _mod17.Animated;
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
let closure_129_0 = 0;
let obj = {
  value: 0,
  addListener: NOOP,
  removeListener: NOOP,
  modify: NOOP,
  get() {
    return React;
  },
  set: NOOP,
};
let closure_130_0 = null;
obj = {
  value: null,
  addListener: NOOP,
  removeListener: NOOP,
  modify: NOOP,
  get() {
    return React;
  },
  set: NOOP,
};
obj = {
  enabled: true,
  animated: null,
  reanimated: null,
  layout: null,
  update: null,
  setKeyboardHandlers: null,
  setInputHandlers: null,
  setEnabled: null,
};
const obj1 = { progress: null, height: null };
let value = new Animated.Value(0);
obj1.progress = value;
value = new Animated.Value(0);
obj1.height = value;
obj.animated = obj1;
obj.reanimated = { progress: obj, height: obj };
obj.layout = obj;
obj.update = Promise.resolve;
obj.setKeyboardHandlers = NESTED_NOOP;
obj.setInputHandlers = NESTED_NOOP;
obj.setEnabled = NOOP;
const context = createContext(obj);

export const KeyboardContext = context;
export const useKeyboardContext = () => React(context);
