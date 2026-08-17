// _runtime/13676_getOwnPropertyDescriptor.js
import _mod13677 from "metro/13677__.js";


export default !_mod13677(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);