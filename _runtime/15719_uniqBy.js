// _runtime/15719_uniqBy.js
import baseIteratee from "00595_baseIteratee.js";
import baseUniq from "15720_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  const tmp = arg0;
  if (tmp) {
    if (arg0.length) {
      const tmp6 = baseUniq;
      tmp6(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
}
