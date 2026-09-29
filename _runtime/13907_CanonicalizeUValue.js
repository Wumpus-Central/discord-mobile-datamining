// _runtime/13907_CanonicalizeUValue.js
import _mod13901 from "metro/13901__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13901.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
