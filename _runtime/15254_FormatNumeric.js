// === Module 15254: FormatNumeric ===

// Module 15254 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15255 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};