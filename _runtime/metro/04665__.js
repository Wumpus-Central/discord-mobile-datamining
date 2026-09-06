// _runtime/metro/04665__.js
import identity from "../00549_identity.js";
import _mod669 from "00669__.js";
import constant from "../04666_constant.js";

if (_mod669) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod669(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
