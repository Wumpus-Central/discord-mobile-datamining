// _runtime/13769_getOwnPropertyDescriptor.js
import _mod13770 from "metro/13770__.js";


export default !_mod13770(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);