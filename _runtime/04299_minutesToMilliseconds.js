// _runtime/04299_minutesToMilliseconds.js
import daysInWeek from "04094_daysInWeek.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let requiredArgs = requiredArgs_mod;
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