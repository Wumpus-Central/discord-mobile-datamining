// === Module 600: toKey ===

// Module 600 (toKey)
import isSymbol from "isSymbol" /* 553 */;


export default function toKey(str) {
  if (typeof str !== "string") {
    if (!isSymbol(str)) {
      let str2;
      const text = `${str}`;
      if ("0" !== `${"0"}`) {
        str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return str;
};