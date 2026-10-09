// _runtime/16129_uniqBy.js
import baseIteratee from "00595_baseIteratee.js";
import baseUniq from "16130_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
