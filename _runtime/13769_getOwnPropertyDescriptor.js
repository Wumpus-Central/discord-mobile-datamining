// === Module 13769: getOwnPropertyDescriptor ===

// Module 13769 (getOwnPropertyDescriptor)
import _mod13770 from "module_13770" /* 13770 */;


export default !_mod13770(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);