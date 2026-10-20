// === Module 6345: Type ===

// Module 6345 (Type)
import _mod6346 from "module_6346" /* 6346 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6346(arg0);
    }
    str = str2;
  }
  return str;
};