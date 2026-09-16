// === Module 4885: Type ===

// Module 4885 (Type)
import _mod4886 from "module_4886" /* 4886 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4886(arg0);
    }
    str = str2;
  }
  return str;
};