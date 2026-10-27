// _runtime/15531_CanonicalizeUValue.js
import _mod15525 from "metro/15525__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15525.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
