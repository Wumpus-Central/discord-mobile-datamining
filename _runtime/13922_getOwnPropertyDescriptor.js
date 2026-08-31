// _runtime/13922_getOwnPropertyDescriptor.js
import _mod13923 from "metro/13923__.js";


export default !_mod13923(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);