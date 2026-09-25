// === Module 13767: FormatNumeric ===

// Module 13767 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 13768 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};