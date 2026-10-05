// === Module 1836: ? ===

// Module 1836
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;

let _window;
let createContext;
let obj2;
let obj4;
let value;
let value2;
function get() {
  return c0;
}
({ useContext: _window, createContext } = react);
const Animated = react_native.Animated;
class NOOP {
  constructor() {

  }
}
class NESTED_NOOP {
  constructor() {
    return NOOP;
  }
}
const obj = { value: 0, addListener: NOOP, removeListener: NOOP, modify: NOOP, get, set: NOOP };
let c0 = null;
const obj3 = { enabled: true, animated: obj4, reanimated: { progress: obj, height: obj }, layout: obj2, update: Promise.resolve, setKeyboardHandlers: NESTED_NOOP, setInputHandlers: NESTED_NOOP, setEnabled: NOOP };
obj2 = { value: null, addListener: NOOP, removeListener: NOOP, modify: NOOP, get, set: NOOP };
obj4 = { progress: value, height: value2 };
value = new Animated.Value(0);
value2 = new Animated.Value(0);
const context = createContext(obj3);

export const KeyboardContext = context;
export const useKeyboardContext = () => React(context);