// === Module 17239: takeWhile ===

// Module 17239 (takeWhile)
import baseIteratee from "baseIteratee" /* 595 */;
import baseWhile from "baseWhile" /* 17240 */;


export default function takeWhile(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseWhile(arg0, baseIteratee(arg1, 3));
    }
    return [];
  }
};