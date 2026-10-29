// === Module 15982: FormatNumericToParts ===

// Module 15982 (FormatNumericToParts)
import _mod15950 from "module_15950" /* 15950 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15978 */;

require = arg1;
const dependencyMap = arg6;

export function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15950.ArrayCreate(0);
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