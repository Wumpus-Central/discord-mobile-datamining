// === Module 14235: FormatNumericRangeToParts ===

// Module 14235 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14234 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type, index) => ({ type: type.type, value: type.value, source: type.source, result: index.toString() }));
};