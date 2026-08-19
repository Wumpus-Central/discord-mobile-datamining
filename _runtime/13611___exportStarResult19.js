// _runtime/13611___exportStarResult19.js
import __exportStarResult25 from "13610___exportStarResult25.js";

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = __exportStarResult25.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((item, index) => ({ type: item.type, value: item.value, source: item.source, result: index.toString() }));
};