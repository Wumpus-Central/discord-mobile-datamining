// _runtime/16013_uniqBy.js
import baseIteratee from "00595_baseIteratee.js";
import baseUniq from "16014_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
