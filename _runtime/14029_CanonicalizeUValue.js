// _runtime/14029_CanonicalizeUValue.js
import _mod14023 from "metro/14023__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14023.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
