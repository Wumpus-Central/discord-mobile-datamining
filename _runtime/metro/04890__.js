// === Module 4890: ? ===

// Module 4890
import _mod4822 from "module_4822" /* 4822 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4822(arg0);
    }
    str = str2;
  }
  return str;
};