// _runtime/15154_uniqBy.js
import baseIteratee from "00584_baseIteratee.js";
import baseUniq from "07715_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
