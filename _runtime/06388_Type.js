// === Module 6388: Type ===

// Module 6388 (Type)
import _mod6389 from "module_6389" /* 6389 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6389(arg0);
    }
    str = str2;
  }
  return str;
};