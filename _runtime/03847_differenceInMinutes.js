// _runtime/03847_differenceInMinutes.js
import daysInWeek from "03829_daysInWeek.js";
import _mod3844 from "metro/03844__.js";
import differenceInMilliseconds from "03843_differenceInMilliseconds.js";
import requiredArgs from "03651_requiredArgs.js";

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
  return _mod3844.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;