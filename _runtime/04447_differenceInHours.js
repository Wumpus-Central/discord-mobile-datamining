// === Module 4447: differenceInHours ===

// Module 4447 (differenceInHours)
import daysInWeek from "daysInWeek" /* 4434 */;
import _mod4449 from "module_4449" /* 4449 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4448 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

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
  return _mod4449.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;