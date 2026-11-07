// === Module 16365: FormatNumeric ===

// Module 16365 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16366 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}