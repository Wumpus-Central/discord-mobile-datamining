// _runtime/14250_CanonicalizeUValue.js
import _mod14244 from "metro/14244__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14244.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
