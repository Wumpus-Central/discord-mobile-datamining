// === Module 4786: differenceInMinutes ===

// Module 4786 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4768 */;
import _mod4783 from "module_4783" /* 4783 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4782 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

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
  return _mod4783.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;