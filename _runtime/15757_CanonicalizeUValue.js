// _runtime/15757_CanonicalizeUValue.js
import _mod15751 from "metro/15751__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15751.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
