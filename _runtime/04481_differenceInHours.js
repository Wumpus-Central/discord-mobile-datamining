// === Module 4481: differenceInHours ===

// Module 4481 (differenceInHours)
import daysInWeek from "daysInWeek" /* 4468 */;
import _mod4483 from "module_4483" /* 4483 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4482 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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
  return _mod4483.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;