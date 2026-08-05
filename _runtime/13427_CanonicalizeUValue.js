// _runtime/13427_CanonicalizeUValue.js
const require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  require(13421) /* isMatched */.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};