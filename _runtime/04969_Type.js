// === Module 4969: Type ===

// Module 4969 (Type)
import _mod4970 from "module_4970" /* 4970 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4970(arg0);
    }
    str = str2;
  }
  return str;
};