// _runtime/14363_CanonicalizeUValue.js
import _mod14357 from "metro/14357__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14357.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
