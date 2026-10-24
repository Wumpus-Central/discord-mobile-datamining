// _runtime/15490_CanonicalizeUValue.js
import _mod15484 from "metro/15484__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15484.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
