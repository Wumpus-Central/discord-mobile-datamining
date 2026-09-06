// _runtime/04030_millisecondsToHours.js
import daysInWeek from "03829_daysInWeek.js";
import requiredArgs from "03651_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInHour);
};
export default exports.default;