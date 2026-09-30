// === Module 4145: differenceInMinutes ===

// Module 4145 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4127 */;
import _mod4142 from "module_4142" /* 4142 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4141 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

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
  return _mod4142.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;