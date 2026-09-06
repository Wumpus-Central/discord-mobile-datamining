// _runtime/14233_FormatNumericRange.js
import PartitionNumberRangePattern from "14234_PartitionNumberRangePattern.js";

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, {
    getInternalSlots: getInternalSlots.getInternalSlots,
  });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
