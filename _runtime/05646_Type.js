// === Module 5646: Type ===

// Module 5646 (Type)
import _mod5647 from "module_5647" /* 5647 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5647(arg0);
    }
    str = str2;
  }
  return str;
};