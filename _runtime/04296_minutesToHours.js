// _runtime/04296_minutesToHours.js
import daysInWeek from "04092_daysInWeek.js";
import requiredArgs_mod from "03914_requiredArgs.js";

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.minutesInHour);
};
export default exports.default;