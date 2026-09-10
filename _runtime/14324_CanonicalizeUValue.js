// _runtime/14324_CanonicalizeUValue.js
import _mod14318 from "metro/14318__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14318.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
