// _runtime/14533_CanonicalizeUValue.js
import _mod14527 from "metro/14527__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14527.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
