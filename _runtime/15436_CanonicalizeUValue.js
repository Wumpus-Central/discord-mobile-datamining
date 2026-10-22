// _runtime/15436_CanonicalizeUValue.js
import _mod15430 from "metro/15430__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15430.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
