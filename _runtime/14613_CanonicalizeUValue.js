// _runtime/14613_CanonicalizeUValue.js
import _mod14607 from "metro/14607__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14607.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
