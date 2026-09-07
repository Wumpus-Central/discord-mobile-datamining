// === Module 14250: CanonicalizeUValue ===

// Module 14250 (CanonicalizeUValue)
import _mod14244 from "module_14244" /* 14244 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14244.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};