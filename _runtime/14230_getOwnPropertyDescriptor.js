// _runtime/14230_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "14178_getOwnPropertyDescriptor.js";
import _mod14179 from "metro/14179__.js";

export default getOwnPropertyDescriptor &&
  _mod14179(() => 42 !== Object.defineProperty(() => {}, "prototype", { value: 42, writable: false }).prototype);
