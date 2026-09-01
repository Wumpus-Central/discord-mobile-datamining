// _runtime/14007_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13955_getOwnPropertyDescriptor.js";
import _mod13956 from "metro/13956__.js";

export default getOwnPropertyDescriptor &&
  _mod13956(() => 42 !== Object.defineProperty(() => {}, "prototype", { value: 42, writable: false }).prototype);
