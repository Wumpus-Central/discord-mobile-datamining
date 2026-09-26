// === Module 15437: uniqBy ===

// Module 15437 (uniqBy)
import baseIteratee from "baseIteratee" /* 584 */;
import baseUniq from "baseUniq" /* 7027 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};