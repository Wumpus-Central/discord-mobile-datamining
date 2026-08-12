// _runtime/14382_uniqBy.js
import { baseIteratee } from "00720_baseIteratee.js";
import { baseUniq } from "07114_baseUniq.js";

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
      const tmp5 = baseUniq;
    }
    return [];
  }
};