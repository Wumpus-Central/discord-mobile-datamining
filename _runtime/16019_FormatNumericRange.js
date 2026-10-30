// === Module 16019: FormatNumericRange ===

// Module 16019 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 16020 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}