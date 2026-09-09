// _runtime/14275_CanonicalizeUValue.js
import _mod14269 from "metro/14269__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14269.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
