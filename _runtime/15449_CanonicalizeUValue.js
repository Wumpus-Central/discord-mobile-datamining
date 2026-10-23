// _runtime/15449_CanonicalizeUValue.js
import _mod15443 from "metro/15443__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15443.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
