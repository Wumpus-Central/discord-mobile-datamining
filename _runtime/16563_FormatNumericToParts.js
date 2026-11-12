// === Module 16563: FormatNumericToParts ===

// Module 16563 (FormatNumericToParts)
import ToNumber from "ToNumber" /* 16531 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 16559 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
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