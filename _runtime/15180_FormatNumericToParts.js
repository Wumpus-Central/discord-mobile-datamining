// === Module 15180: FormatNumericToParts ===

// Module 15180 (FormatNumericToParts)
import _mod15148 from "module_15148" /* 15148 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 15176 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod15148.ArrayCreate(0);
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
};