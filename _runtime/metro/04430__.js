import { getNative } from "../00805_getNative.js";
import { constant } from "../04431_constant.js";
// _runtime/metro/04430__.js
if (require("getNative")) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: null, writable: true };
    obj[2] = constant /* constant */(arg1);
    return getNative /* getNative */(arg0, "toString", obj);
  };
} else {
  fn = require("identity");
}

export default fn;