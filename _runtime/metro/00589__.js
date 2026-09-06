// _runtime/metro/00589__.js
import _mod553 from "00553__.js";

export default function toKey(str) {
  if (typeof str !== "string") {
    if (!_mod553(str)) {
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
}
