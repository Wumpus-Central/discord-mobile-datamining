// _runtime/00600_toKey.js
import isSymbol from "00553_isSymbol.js";

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
}
