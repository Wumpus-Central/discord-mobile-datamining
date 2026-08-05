import { isMatched } from "13421_isMatched.js";
// _runtime/13427_CanonicalizeUValue.js
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};