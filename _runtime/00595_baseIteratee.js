// _runtime/00595_baseIteratee.js
import _mod514 from "metro/00514__.js";
import identity from "00549_identity.js";
import baseMatchesProperty from "00596_baseMatchesProperty.js";
import baseMatches from "00673_baseMatches.js";
import property from "00676_property.js";

export default function baseIteratee(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    let tmp5;
    if (null == fn) {
      tmp5 = identity;
    } else if (typeof fn === "object") {
      let tmp4;
      if (_mod514(fn)) {
        tmp4 = baseMatchesProperty(fn[0], fn[1]);
      } else {
        tmp4 = baseMatches(fn);
      }
      tmp5 = tmp4;
    } else {
      tmp5 = property(fn);
    }
    tmp = tmp5;
  }
  return tmp;
}
