// === Module 5327: Type ===

// Module 5327 (Type)
import _mod5328 from "module_5328" /* 5328 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5328(arg0);
    }
    str = str2;
  }
  return str;
};