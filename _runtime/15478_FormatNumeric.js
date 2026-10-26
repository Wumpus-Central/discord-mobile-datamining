// === Module 15478: FormatNumeric ===

// Module 15478 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15479 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};