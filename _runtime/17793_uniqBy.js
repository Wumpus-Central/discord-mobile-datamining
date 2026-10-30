// === Module 17793: uniqBy ===

// Module 17793 (uniqBy)
import baseIteratee from "baseIteratee" /* 583 */;
import baseUniq from "baseUniq" /* 17794 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};