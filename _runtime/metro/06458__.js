// === Module 6458: ? ===

// Module 6458
import _mod6390 from "module_6390" /* 6390 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6390(arg0);
    }
    str = str2;
  }
  return str;
};