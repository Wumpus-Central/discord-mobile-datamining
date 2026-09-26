// _runtime/13739_CanonicalizeUValue.js
import _mod13733 from "metro/13733__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13733.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
