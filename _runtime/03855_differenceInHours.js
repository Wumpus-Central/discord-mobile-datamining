// _runtime/03855_differenceInHours.js
import daysInWeek from "03842_daysInWeek.js";
import _mod3857 from "metro/03857__.js";
import differenceInMilliseconds from "03856_differenceInMilliseconds.js";
import requiredArgs from "03664_requiredArgs.js";

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
  return _mod3857.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;