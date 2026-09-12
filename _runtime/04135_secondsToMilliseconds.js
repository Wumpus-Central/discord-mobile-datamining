// _runtime/04135_secondsToMilliseconds.js
import daysInWeek from "03904_daysInWeek.js";
import requiredArgs from "03726_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return arg0 * daysInWeek.millisecondsInSecond;
};
export default exports.default;