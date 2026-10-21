// === Module 6436: ? ===

// Module 6436
import _mod6368 from "module_6368" /* 6368 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6368(arg0);
    }
    str = str2;
  }
  return str;
};