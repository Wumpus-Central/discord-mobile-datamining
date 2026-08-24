// === Module 14495: uniqBy ===

// Module 14495 (uniqBy)
import baseIteratee from "baseIteratee" /* 720 */;
import baseUniq from "baseUniq" /* 5035 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
      const tmp5 = baseUniq;
    }
    return [];
  }
};