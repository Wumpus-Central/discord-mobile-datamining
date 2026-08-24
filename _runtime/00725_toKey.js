// === Module 725: toKey ===

// Module 725 (toKey)
import isSymbol from "isSymbol" /* 638 */;


export default function toKey(str) {
  if (typeof str !== "string") {
    if (!isSymbol(str)) {
      const text = `${str}`;
      if ("0" !== `${str}`) {
        let str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return str;
};