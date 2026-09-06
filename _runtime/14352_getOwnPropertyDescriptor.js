// _runtime/14352_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "14300_getOwnPropertyDescriptor.js";
import _mod14301 from "metro/14301__.js";

export default getOwnPropertyDescriptor &&
  _mod14301(() => 42 !== Object.defineProperty(() => {}, "prototype", { value: 42, writable: false }).prototype);
