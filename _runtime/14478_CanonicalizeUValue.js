// _runtime/14478_CanonicalizeUValue.js
import _mod14472 from "metro/14472__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14472.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
