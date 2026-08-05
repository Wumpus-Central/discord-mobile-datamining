import { baseUniq } from "06981_baseUniq.js";
// _runtime/06980_uniqWith.js

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      baseUniq /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};