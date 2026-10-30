// === Module 16017: FormatNumeric ===

// Module 16017 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16018 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}