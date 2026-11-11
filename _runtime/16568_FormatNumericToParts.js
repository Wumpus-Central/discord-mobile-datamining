// _runtime/16568_FormatNumericToParts.js
import ToNumber from "16536_ToNumber.js";
import PartitionNumberPattern from "16564_PartitionNumberPattern.js";

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
