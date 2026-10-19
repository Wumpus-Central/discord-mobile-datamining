// === Module 6342: Type ===

// Module 6342 (Type)
import _mod6343 from "module_6343" /* 6343 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6343(arg0);
    }
    str = str2;
  }
  return str;
};