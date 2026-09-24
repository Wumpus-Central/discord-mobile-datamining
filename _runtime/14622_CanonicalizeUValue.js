// _runtime/14622_CanonicalizeUValue.js
import _mod14616 from "metro/14616__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14616.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
