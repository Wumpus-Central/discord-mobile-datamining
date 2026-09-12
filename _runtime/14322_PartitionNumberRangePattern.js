// _runtime/14322_PartitionNumberRangePattern.js
import _mod14294 from "metro/14294__.js";
import CollapseNumberRange from "14307_CollapseNumberRange.js";
import FormatApproximately from "14318_FormatApproximately.js";
import FormatNumeric from "14319_FormatNumeric.js";
import PartitionNumberPattern from "14320_PartitionNumberPattern.js";

require = arg1;
const dependencyMap = arg6;

export const PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const isNaNResult = isNaN.isNaN();
  let tmp4 = !isNaNResult;
  if (!isNaNResult) {
    tmp4 = !isNaN2.isNaN();
  }
  _mod14294.invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const result1 = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN2);
  if (FormatNumericResult === FormatNumeric.FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = FormatApproximately.FormatApproximately(internalSlots, result);
    const item = FormatApproximatelyResult.forEach((item) => {
      item.source = "shared";
    });
    return FormatApproximatelyResult;
  } else {
    const items = [];
    const item1 = result.forEach((item) => {
      item.source = "startRange";
      items.push(item);
    });
    let obj = {
      type: "literal",
      value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign,
      source: "shared",
    };
    items.push(obj);
    const item2 = result1.forEach((item) => {
      item.source = "endRange";
      items.push(item);
    });
    obj = { getInternalSlots };
    return CollapseNumberRange.CollapseNumberRange(arg0, items, obj);
  }
  FormatNumericResult = FormatNumeric.FormatNumeric(internalSlots, isNaN);
};
