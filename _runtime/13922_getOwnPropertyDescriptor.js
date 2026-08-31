// === Module 13922: getOwnPropertyDescriptor ===

// Module 13922 (getOwnPropertyDescriptor)
import _mod13923 from "module_13923" /* 13923 */;


export default !_mod13923(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);