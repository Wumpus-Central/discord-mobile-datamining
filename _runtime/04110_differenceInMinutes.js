// === Module 4110: differenceInMinutes ===

// Module 4110 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4092 */;
import _mod4107 from "module_4107" /* 4107 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4106 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let differenceInMilliseconds = differenceInMilliseconds_mod;
if (!differenceInMilliseconds) {
  const obj = { default: differenceInMilliseconds };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / daysInWeek.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod4107.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;