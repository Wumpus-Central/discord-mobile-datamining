// === Module 5934: ? ===

// Module 5934
import _mod5866 from "module_5866" /* 5866 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5866(arg0);
    }
    str = str2;
  }
  return str;
};