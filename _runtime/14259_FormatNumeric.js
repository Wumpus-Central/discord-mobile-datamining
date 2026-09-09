// === Module 14259: FormatNumeric ===

// Module 14259 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14260 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};