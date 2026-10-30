// === Module 6523: ? ===

// Module 6523
import _mod6455 from "module_6455" /* 6455 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6455(arg0);
    }
    str = str2;
  }
  return str;
};