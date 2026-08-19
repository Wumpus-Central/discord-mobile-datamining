// === Module 13610: __exportStarResult25 ===

// Module 13610 (__exportStarResult25)
const require = arg1;
const dependencyMap = arg6;
arg5.PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const isNaNResult = isNaN.isNaN();
  let tmp4 = !isNaNResult;
  if (!isNaNResult) {
    tmp4 = !isNaN2.isNaN();
  }
  items(13582).invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = tmp(13608).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = tmp(13608).PartitionNumberPattern(internalSlots, isNaN2);
  if (FormatNumericResult === items(13607).FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = tmp(13606).FormatApproximately(internalSlots, result);
    const item = FormatApproximatelyResult.forEach((item, index) => {
      item.source = "shared";
    });
    return FormatApproximatelyResult;
  } else {
    items = [];
    const item1 = result.forEach((item, index) => {
      item.source = "startRange";
      items.push(item);
    });
    let obj = { type: "literal", value: null, source: "shared" };
    obj[1] = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign;
    items.push(obj);
    const item2 = result1.forEach((item, index) => {
      item.source = "endRange";
      items.push(item);
    });
    obj = { getInternalSlots: null };
    obj[0] = getInternalSlots;
    return tmp(13595).CollapseNumberRange(arg0, items, obj);
  }
  FormatNumericResult = items(13607).FormatNumeric(internalSlots, isNaN);
};