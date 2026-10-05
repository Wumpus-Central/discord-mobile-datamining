// _runtime/metro/04996__.js
import identity from "../00549_identity.js";
import getNative from "../00680_getNative.js";
import constant from "../04997_constant.js";

let fn;
if (getNative) {
  fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    const tmp = getNative;
    return tmp(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
