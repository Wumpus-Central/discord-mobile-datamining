// _runtime/14300_CanonicalizeUValue.js
import _mod14294 from "metro/14294__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14294.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
