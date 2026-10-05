// === Module 595: baseIteratee ===

// Module 595 (baseIteratee)
import _mod514 from "module_514" /* 514 */;
import identity from "identity" /* 549 */;
import baseMatchesProperty from "baseMatchesProperty" /* 596 */;
import baseMatches from "baseMatches" /* 673 */;
import property from "property" /* 676 */;


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
};