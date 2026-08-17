// _runtime/13676_getOwnPropertyDescriptor.js
import _mod13677 from "module_13677" /* 13677 */;


export default !_mod13677(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);