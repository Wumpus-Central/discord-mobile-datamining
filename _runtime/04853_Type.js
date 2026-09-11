// === Module 4853: Type ===

// Module 4853 (Type)
import _mod4854 from "module_4854" /* 4854 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4854(arg0);
    }
    str = str2;
  }
  return str;
};