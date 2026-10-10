// === Module 16183: takeWhile ===

// Module 16183 (takeWhile)
import baseIteratee from "baseIteratee" /* 595 */;
import baseWhile from "baseWhile" /* 16184 */;


export default function takeWhile(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseWhile(arg0, baseIteratee(arg1, 3));
    }
    return [];
  }
};