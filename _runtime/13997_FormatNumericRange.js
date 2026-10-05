// === Module 13997: FormatNumericRange ===

// Module 13997 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 13998 */;


export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const obj = { getInternalSlots: getInternalSlots.getInternalSlots };
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, obj);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};