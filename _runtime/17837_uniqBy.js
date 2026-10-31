// _runtime/17837_uniqBy.js
import baseIteratee from "00583_baseIteratee.js";
import baseUniq from "17838_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
