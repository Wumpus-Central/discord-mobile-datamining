// === Module 14485: FormatNumeric ===

// Module 14485 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14486 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};