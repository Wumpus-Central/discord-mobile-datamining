// === Module 4150: differenceInHours ===

// Module 4150 (differenceInHours)
import daysInWeek from "daysInWeek" /* 4137 */;
import _mod4152 from "module_4152" /* 4152 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4151 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

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
  return _mod4152.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;