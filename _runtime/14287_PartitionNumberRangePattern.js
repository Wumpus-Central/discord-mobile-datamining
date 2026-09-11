// === Module 14287: PartitionNumberRangePattern ===

// Module 14287 (PartitionNumberRangePattern)
import _mod14259 from "module_14259" /* 14259 */;
import CollapseNumberRange from "CollapseNumberRange" /* 14272 */;
import FormatApproximately from "FormatApproximately" /* 14283 */;
import FormatNumeric from "FormatNumeric" /* 14284 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14285 */;

require = arg1;
const dependencyMap = arg6;

export const PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const isNaNResult = isNaN.isNaN();
  let tmp4 = !isNaNResult;
  if (!isNaNResult) {
    tmp4 = !isNaN2.isNaN();
  }
  _mod14259.invariant(tmp4, "Input must be a number", RangeError);
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
    let obj = { type: "literal", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign, source: "shared" };
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