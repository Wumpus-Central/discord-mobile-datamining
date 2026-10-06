// === Module 14016: PartitionNumberRangePattern ===

// Module 14016 (PartitionNumberRangePattern)
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 13988 */;
import CollapseNumberRange from "CollapseNumberRange" /* 14001 */;
import FormatApproximately from "FormatApproximately" /* 14012 */;
import FormatNumeric from "FormatNumeric" /* 14013 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14014 */;


export const PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  const isNaNResult = isNaN.isNaN();
  const tmp4 = !isNaNResult && !isNaN2.isNaN();
  invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const result1 = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN2);
  const FormatNumericResult = FormatNumeric.FormatNumeric(internalSlots, isNaN);
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
    const obj = { type: "literal", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign, source: "shared" };
    items.push(obj);
    const item2 = result1.forEach((item) => {
      item.source = "endRange";
      items.push(item);
    });
    const obj2 = { getInternalSlots };
    return CollapseNumberRange.CollapseNumberRange(arg0, items, obj2);
  }
};