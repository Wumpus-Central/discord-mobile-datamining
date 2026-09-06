// _runtime/14234___exportStarResult25.js
const require = arg1;
const dependencyMap = arg6;
arg5.PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const isNaNResult = isNaN.isNaN();
  let tmp4 = !isNaNResult;
  if (!isNaNResult) {
    tmp4 = !isNaN2.isNaN();
  }
  items(14206).invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = tmp(14232).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = tmp(14232).PartitionNumberPattern(internalSlots, isNaN2);
  if (FormatNumericResult === items(14231).FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = tmp(14230).FormatApproximately(internalSlots, result);
    const item = FormatApproximatelyResult.forEach((arg0) => {
      arg0.source = "shared";
    });
    return FormatApproximatelyResult;
  } else {
    items = [];
    const item1 = result.forEach((arg0) => {
      arg0.source = "startRange";
      items.push(arg0);
    });
    let obj = { type: "literal", value: null, source: "shared" };
    obj[1] = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign;
    items.push(obj);
    const item2 = result1.forEach((arg0) => {
      arg0.source = "endRange";
      items.push(arg0);
    });
    obj = { getInternalSlots: null };
    obj[0] = getInternalSlots;
    return tmp(14219).CollapseNumberRange(arg0, items, obj);
  }
  FormatNumericResult = items(14231).FormatNumeric(internalSlots, isNaN);
};
