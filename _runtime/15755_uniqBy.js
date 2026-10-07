// _runtime/15755_uniqBy.js
import baseIteratee from "00595_baseIteratee.js";
import baseUniq from "15756_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
