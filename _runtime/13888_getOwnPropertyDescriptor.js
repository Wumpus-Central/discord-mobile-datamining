// === Module 13888: getOwnPropertyDescriptor ===

// Module 13888 (getOwnPropertyDescriptor)
import _mod13889 from "module_13889" /* 13889 */;


export default !_mod13889(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);