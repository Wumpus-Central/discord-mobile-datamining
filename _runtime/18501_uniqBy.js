// _runtime/18501_uniqBy.js
import baseIteratee from "00583_baseIteratee.js";
import baseUniq from "18502_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
