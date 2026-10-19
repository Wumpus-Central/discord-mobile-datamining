// === Module 15286: FormatNumeric ===

// Module 15286 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15287 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};