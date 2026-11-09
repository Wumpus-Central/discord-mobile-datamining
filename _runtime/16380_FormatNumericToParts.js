// === Module 16380: FormatNumericToParts ===

// Module 16380 (FormatNumericToParts)
import ToNumber from "ToNumber" /* 16348 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16376 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = ToNumber.ArrayCreate(0);
  if (0 < result.length) {
    do {
      let iter = result[num];
      let obj = { type: iter.type, value: iter.value };
      let arr = ArrayCreateResult.push(obj);
      num = num + 1;
      length = result.length;
    } while (num < length);
  }
  return ArrayCreateResult;
}