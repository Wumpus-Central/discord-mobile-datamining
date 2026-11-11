// === Module 4719: differenceInMinutes ===

// Module 4719 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4701 */;
import _mod4716 from "module_4716" /* 4716 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4715 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

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
  return _mod4716.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;