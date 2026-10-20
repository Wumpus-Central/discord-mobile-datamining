// === Module 15304: FormatNumeric ===

// Module 15304 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15305 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};