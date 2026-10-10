// === Module 4391: differenceInHours ===

// Module 4391 (differenceInHours)
import daysInWeek from "daysInWeek" /* 4378 */;
import _mod4393 from "module_4393" /* 4393 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4392 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

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
  return _mod4393.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;