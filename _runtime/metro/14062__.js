// === Module 14062: ? ===

// Module 14062
import _mod14061 from "module_14061" /* 14061 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14061, arg0, obj);
  } catch (err) {
    _mod14061[arg0] = value;
  }
  return value;
};