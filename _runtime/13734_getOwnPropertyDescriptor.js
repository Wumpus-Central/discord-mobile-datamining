// === Module 13734: getOwnPropertyDescriptor ===

// Module 13734 (getOwnPropertyDescriptor)
import _mod13735 from "module_13735" /* 13735 */;


export default !_mod13735(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);