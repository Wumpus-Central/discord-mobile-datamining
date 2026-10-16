// === Module 5868: Type ===

// Module 5868 (Type)
import _mod5869 from "module_5869" /* 5869 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5869(arg0);
    }
    str = str2;
  }
  return str;
};