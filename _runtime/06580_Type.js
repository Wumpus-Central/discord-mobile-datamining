// === Module 6580: Type ===

// Module 6580 (Type)
import _mod6581 from "module_6581" /* 6581 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6581(arg0);
    }
    str = str2;
  }
  return str;
};