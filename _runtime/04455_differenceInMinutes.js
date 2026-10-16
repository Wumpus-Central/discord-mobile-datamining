// === Module 4455: differenceInMinutes ===

// Module 4455 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4437 */;
import _mod4452 from "module_4452" /* 4452 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4451 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

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
  return _mod4452.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;