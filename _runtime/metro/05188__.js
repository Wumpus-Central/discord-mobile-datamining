// _runtime/metro/05188__.js
import identity from "../00549_identity.js";
import _mod680 from "00680__.js";
import constant from "../05189_constant.js";

if (_mod680) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod680(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
