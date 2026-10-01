// === Module 5350: ? ===

// Module 5350
import _mod5282 from "module_5282" /* 5282 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5282(arg0);
    }
    str = str2;
  }
  return str;
};