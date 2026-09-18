// _runtime/14466_CanonicalizeUValue.js
import _mod14460 from "metro/14460__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14460.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
