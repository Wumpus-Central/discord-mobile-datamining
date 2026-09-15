// === Module 1830: NOOP ===

// Module 1830 (NOOP)
import _mod17 from "module_17" /* 17 */;
import noop from "module_19" /* 19 */;

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
const obj = {
  value: 0,
  addListener: NOOP,
  removeListener: NOOP,
  modify: NOOP,
  get() {
    return React;
  },
  set: NOOP
};
let closure_130_0 = null;
const obj3 = { enabled: true, animated: null, reanimated: null, layout: null, update: null, setKeyboardHandlers: null, setInputHandlers: null, setEnabled: null };
const obj4 = { progress: null, height: null };
const value = new Animated.Value(0);
obj4.progress = value;
const value2 = new Animated.Value(0);
obj4.height = value2;
obj3.animated = obj4;
obj3.reanimated = { progress: obj, height: obj };
obj3.layout = {
  value: null,
  addListener: NOOP,
  removeListener: NOOP,
  modify: NOOP,
  get() {
    return React;
  },
  set: NOOP
};
obj3.update = Promise.resolve;
obj3.setKeyboardHandlers = NESTED_NOOP;
obj3.setInputHandlers = NESTED_NOOP;
obj3.setEnabled = NOOP;
const context = createContext(obj3);

export const KeyboardContext = context;
export const useKeyboardContext = () => React(context);