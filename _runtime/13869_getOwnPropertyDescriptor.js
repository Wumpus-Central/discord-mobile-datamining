// _runtime/13869_getOwnPropertyDescriptor.js
import _mod13870 from "metro/13870__.js";


export default !_mod13870(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);