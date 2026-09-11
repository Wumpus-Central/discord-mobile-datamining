// === Module 3892: differenceInMinutes ===

// Module 3892 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 3874 */;
import _mod3889 from "module_3889" /* 3889 */;
import differenceInMilliseconds from "differenceInMilliseconds" /* 3888 */;
import requiredArgs from "requiredArgs" /* 3696 */;

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

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / daysInWeek.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3889.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;