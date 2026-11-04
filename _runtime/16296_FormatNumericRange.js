// === Module 16296: FormatNumericRange ===

// Module 16296 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16297 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}