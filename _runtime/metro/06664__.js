// === Module 6664: ? ===

// Module 6664
import _mod6596 from "module_6596" /* 6596 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6596(arg0);
    }
    str = str2;
  }
  return str;
};