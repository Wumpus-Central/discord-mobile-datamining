// _runtime/13888_getOwnPropertyDescriptor.js
import _mod13889 from "metro/13889__.js";


export default !_mod13889(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);