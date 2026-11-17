// _runtime/16719_PartitionNumberRangePattern.js
import _mod16691 from "metro/16691__.js";
import CollapseNumberRange from "16704_CollapseNumberRange.js";
import FormatApproximately from "16715_FormatApproximately.js";
import FormatNumeric from "16716_FormatNumeric.js";
import PartitionNumberPattern from "16717_PartitionNumberPattern.js";

require = arg1;
const dependencyMap = arg6;

export function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const isNaNResult = isNaN.isNaN();
  let tmp4 = !isNaNResult;
  if (!isNaNResult) {
    tmp4 = !isNaN2.isNaN();
  }
  _mod16691.invariant(tmp4, "Input must be a number", RangeError);
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
    items = [];
    const item1 = result.forEach((item) => {
      item.source = "startRange";
      items.push(item);
    });
    const obj = {
      type: "literal",
      value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign,
      source: "shared",
    };
    items.push(obj);
    const item2 = result1.forEach((item) => {
      item.source = "endRange";
      items.push(item);
    });
    const obj2 = { getInternalSlots };
    return CollapseNumberRange.CollapseNumberRange(arg0, items, obj2);
  }
  FormatNumericResult = FormatNumeric.FormatNumeric(internalSlots, isNaN);
}
