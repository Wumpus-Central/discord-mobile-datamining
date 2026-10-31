// === Module 6460: Type ===

// Module 6460 (Type)
import _mod6461 from "module_6461" /* 6461 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6461(arg0);
    }
    str = str2;
  }
  return str;
};