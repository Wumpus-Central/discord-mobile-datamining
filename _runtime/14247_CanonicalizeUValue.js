// _runtime/14247_CanonicalizeUValue.js
import _mod14241 from "metro/14241__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14241.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
