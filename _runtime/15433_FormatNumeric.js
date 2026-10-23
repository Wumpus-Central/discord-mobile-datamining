// === Module 15433: FormatNumeric ===

// Module 15433 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15434 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};