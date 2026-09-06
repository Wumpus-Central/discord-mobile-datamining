// === Module 589: ? ===

// Module 589
import _mod553 from "module_553" /* 553 */;


export default function toKey(str) {
  if (typeof str !== "string") {
    if (!_mod553(str)) {
      const text = `${str}`;
      if ("0" !== `${"0"}`) {
        let str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return str;
};