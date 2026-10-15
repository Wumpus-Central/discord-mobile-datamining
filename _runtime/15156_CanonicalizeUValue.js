// _runtime/15156_CanonicalizeUValue.js
import _mod15150 from "metro/15150__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15150.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
