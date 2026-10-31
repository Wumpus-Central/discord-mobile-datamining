// _runtime/metro/05840__.js
import identity from "../00549_identity.js";
import _mod668 from "00668__.js";
import constant from "../05841_constant.js";

if (_mod668) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod668(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
