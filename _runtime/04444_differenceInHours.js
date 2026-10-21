// === Module 4444: differenceInHours ===

// Module 4444 (differenceInHours)
import daysInWeek from "daysInWeek" /* 4431 */;
import _mod4446 from "module_4446" /* 4446 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4445 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

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

export default function differenceInHours(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / daysInWeek.millisecondsInHour;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod4446.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;