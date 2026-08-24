// _runtime/metro/04624__.js
import identity from "../00634_identity.js";
import getNative from "../00805_getNative.js";
import constant from "../04625_constant.js";

if (getNative) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return getNative(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;