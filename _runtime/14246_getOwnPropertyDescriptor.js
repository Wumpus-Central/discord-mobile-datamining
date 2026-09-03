// _runtime/14246_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "14194_getOwnPropertyDescriptor.js";
import _mod14195 from "metro/14195__.js";

export default getOwnPropertyDescriptor &&
  _mod14195(() => 42 !== Object.defineProperty(() => {}, "prototype", { value: 42, writable: false }).prototype);
