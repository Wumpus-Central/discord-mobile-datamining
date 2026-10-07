// === Module 5403: ? ===

// Module 5403
import _mod5335 from "module_5335" /* 5335 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5335(arg0);
    }
    str = str2;
  }
  return str;
};