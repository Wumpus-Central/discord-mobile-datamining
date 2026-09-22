// === Module 14517: FormatNumeric ===

// Module 14517 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14518 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};