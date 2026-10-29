// === Module 6447: Type ===

// Module 6447 (Type)
import _mod6448 from "module_6448" /* 6448 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6448(arg0);
    }
    str = str2;
  }
  return str;
};