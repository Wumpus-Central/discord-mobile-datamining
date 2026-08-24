// _runtime/13734_getOwnPropertyDescriptor.js
import _mod13735 from "metro/13735__.js";


export default !_mod13735(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);