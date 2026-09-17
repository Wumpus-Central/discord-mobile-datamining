// _runtime/14371_CanonicalizeUValue.js
import _mod14365 from "metro/14365__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14365.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
