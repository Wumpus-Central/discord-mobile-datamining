// === Module 5293: Type ===

// Module 5293 (Type)
import _mod5294 from "module_5294" /* 5294 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5294(arg0);
    }
    str = str2;
  }
  return str;
};