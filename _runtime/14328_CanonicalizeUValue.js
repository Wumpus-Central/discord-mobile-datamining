// _runtime/14328_CanonicalizeUValue.js
import _mod14322 from "metro/14322__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14322.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
