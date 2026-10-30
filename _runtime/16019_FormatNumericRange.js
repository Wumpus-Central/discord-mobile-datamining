// _runtime/16019_FormatNumericRange.js
import PartitionNumberRangePattern from "16020_PartitionNumberRangePattern.js";

require = arg1;
const dependencyMap = arg6;

export function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, {
    getInternalSlots: getInternalSlots.getInternalSlots,
  });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}
