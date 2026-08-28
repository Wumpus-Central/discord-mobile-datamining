// _runtime/13824___exportStarResult20.js
import __exportStarResult32 from "13792___exportStarResult32.js";
import __exportStarResult24 from "13820___exportStarResult24.js";

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = __exportStarResult24.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = __exportStarResult32.ArrayCreate(0);
  if (0 < result.length) {
    do {
      let iter = result[num];
      let obj = { type: null, value: null };
      obj[0] = iter.type;
      obj[1] = iter.value;
      let arr = ArrayCreateResult.push(obj);
      num = num + 1;
      length = result.length;
    } while (num < length);
  }
  return ArrayCreateResult;
};