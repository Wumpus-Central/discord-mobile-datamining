// _runtime/14335_CanonicalizeUValue.js
import _mod14329 from "metro/14329__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14329.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
