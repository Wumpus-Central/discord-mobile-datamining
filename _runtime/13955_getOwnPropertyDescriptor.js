// === Module 13955: getOwnPropertyDescriptor ===

// Module 13955 (getOwnPropertyDescriptor)
import _mod13956 from "module_13956" /* 13956 */;


export default !_mod13956(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);