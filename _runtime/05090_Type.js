// === Module 5090: Type ===

// Module 5090 (Type)
import _mod5091 from "module_5091" /* 5091 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5091(arg0);
    }
    str = str2;
  }
  return str;
};