// _runtime/13789_CanonicalizeUValue.js
import isMatched from "13783_isMatched.js";

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};