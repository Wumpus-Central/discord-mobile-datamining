// _runtime/14501_CanonicalizeUValue.js
import _mod14495 from "metro/14495__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14495.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
