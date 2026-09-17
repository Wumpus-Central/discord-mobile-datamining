// === Module 3925: differenceInMinutes ===

// Module 3925 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 3907 */;
import _mod3922 from "module_3922" /* 3922 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 3921 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

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
  return _mod3922.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;