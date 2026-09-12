// === Module 4883: Type ===

// Module 4883 (Type)
import _mod4884 from "module_4884" /* 4884 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4884(arg0);
    }
    str = str2;
  }
  return str;
};