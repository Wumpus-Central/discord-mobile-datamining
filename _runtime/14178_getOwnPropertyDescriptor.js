// === Module 14178: getOwnPropertyDescriptor ===

// Module 14178 (getOwnPropertyDescriptor)
import _mod14179 from "module_14179" /* 14179 */;


export default !_mod14179(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);