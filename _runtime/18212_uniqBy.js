// _runtime/18212_uniqBy.js
import baseIteratee from "00583_baseIteratee.js";
import baseUniq from "18213_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
