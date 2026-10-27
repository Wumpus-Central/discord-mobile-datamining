// === Module 15515: FormatNumeric ===

// Module 15515 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15516 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};