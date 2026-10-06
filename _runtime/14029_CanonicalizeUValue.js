// _runtime/14029_CanonicalizeUValue.js
import _mod14023 from "metro/14023__.js";

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14023.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
