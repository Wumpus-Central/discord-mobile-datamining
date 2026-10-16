// === Module 5867: Type ===

// Module 5867 (Type)
import _mod5868 from "module_5868" /* 5868 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5868(arg0);
    }
    str = str2;
  }
  return str;
};