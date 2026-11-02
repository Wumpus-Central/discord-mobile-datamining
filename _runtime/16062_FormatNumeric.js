// === Module 16062: FormatNumeric ===

// Module 16062 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16063 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}