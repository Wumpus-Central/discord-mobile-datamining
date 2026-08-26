// _runtime/13842_getOwnPropertyDescriptor.js
import _mod13843 from "metro/13843__.js";


export default !_mod13843(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);