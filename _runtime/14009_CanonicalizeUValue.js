// _runtime/14009_CanonicalizeUValue.js
import _mod14003 from "metro/14003__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14003.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
