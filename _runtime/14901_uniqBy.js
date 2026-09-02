// _runtime/14901_uniqBy.js
import baseIteratee from "00717_baseIteratee.js";
import baseUniq from "07367_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
      const tmp5 = baseUniq;
    }
    return [];
  }
}
