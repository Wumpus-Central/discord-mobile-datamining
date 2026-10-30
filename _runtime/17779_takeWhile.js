// === Module 17779: takeWhile ===

// Module 17779 (takeWhile)
import baseIteratee from "baseIteratee" /* 583 */;
import baseWhile from "baseWhile" /* 17780 */;


export default function takeWhile(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseWhile(arg0, baseIteratee(arg1, 3));
    }
    return [];
  }
};