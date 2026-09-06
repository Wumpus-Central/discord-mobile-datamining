// === Module 4807: Type ===

// Module 4807 (Type)
import _mod4808 from "module_4808" /* 4808 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4808(arg0);
    }
    str = str2;
  }
  return str;
};