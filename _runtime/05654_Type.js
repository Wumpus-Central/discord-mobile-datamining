// === Module 5654: Type ===

// Module 5654 (Type)
import _mod5655 from "module_5655" /* 5655 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5655(arg0);
    }
    str = str2;
  }
  return str;
};