// _runtime/15389_FormatNumericRangeToParts.js
import PartitionNumberRangePattern from "15388_PartitionNumberRangePattern.js";

require = arg1;
const dependencyMap = arg6;

export function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, {
    getInternalSlots: getInternalSlots.getInternalSlots,
  });
  return result.map((type, index) => ({
    type: type.type,
    value: type.value,
    source: type.source,
    result: index.toString(),
  }));
}
