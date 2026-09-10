// _runtime/04077_minutesToMilliseconds.js
import daysInWeek from "03872_daysInWeek.js";
import requiredArgs from "03694_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInMinute);
};
export default exports.default;