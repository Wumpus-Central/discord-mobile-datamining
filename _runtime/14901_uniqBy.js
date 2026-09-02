// === Module 14901: uniqBy ===

// Module 14901 (uniqBy)
import baseIteratee from "baseIteratee" /* 717 */;
import baseUniq from "baseUniq" /* 7367 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
      const tmp5 = baseUniq;
    }
    return [];
  }
};