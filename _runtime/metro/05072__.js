// === Module 5072: ? ===

// Module 5072
import _mod5004 from "module_5004" /* 5004 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5004(arg0);
    }
    str = str2;
  }
  return str;
};