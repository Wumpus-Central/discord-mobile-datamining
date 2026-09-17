// === Module 4956: ? ===

// Module 4956
import _mod4888 from "module_4888" /* 4888 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4888(arg0);
    }
    str = str2;
  }
  return str;
};