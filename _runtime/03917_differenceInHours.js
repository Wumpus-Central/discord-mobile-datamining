// === Module 3917: differenceInHours ===

// Module 3917 (differenceInHours)
import daysInWeek from "daysInWeek" /* 3904 */;
import _mod3919 from "module_3919" /* 3919 */;
import differenceInMilliseconds from "differenceInMilliseconds" /* 3918 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!differenceInMilliseconds) {
  let obj = { default: differenceInMilliseconds };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
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
  return _mod3919.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;