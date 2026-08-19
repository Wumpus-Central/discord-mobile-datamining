// === Module 13676: getOwnPropertyDescriptor ===

// Module 13676 (getOwnPropertyDescriptor)
import _mod13677 from "module_13677" /* 13677 */;


export default !_mod13677(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);