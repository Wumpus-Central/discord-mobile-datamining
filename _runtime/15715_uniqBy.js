// === Module 15715: uniqBy ===

// Module 15715 (uniqBy)
import baseIteratee from "baseIteratee" /* 595 */;
import baseUniq from "baseUniq" /* 15716 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};