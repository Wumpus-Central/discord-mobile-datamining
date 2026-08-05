// _runtime/14220_uniqBy.js
import { baseIteratee } from "00720_baseIteratee.js";
import { baseUniq } from "06981_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq /* baseUniq */(arg0, baseIteratee /* baseIteratee */(arg1, 2));
      const tmp5 = baseUniq /* baseUniq */;
    }
    return [];
  }
};