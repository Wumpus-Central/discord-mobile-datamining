// === Module 15981: FormatNumericRangeToParts ===

// Module 15981 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 15980 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type, index) => ({ type: type.type, value: type.value, source: type.source, result: index.toString() }));
}