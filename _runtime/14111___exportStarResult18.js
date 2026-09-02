// _runtime/14111___exportStarResult18.js
import __exportStarResult25 from "14112___exportStarResult25.js";

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = __exportStarResult25.PartitionNumberRangePattern(arg0, isNaN, isNaN2, {
    getInternalSlots: getInternalSlots.getInternalSlots,
  });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
