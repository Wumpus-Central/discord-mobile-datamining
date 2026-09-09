// _runtime/04106_yearsToQuarters.js
import daysInWeek from "03842_daysInWeek.js";
import requiredArgs from "03664_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function yearsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.quartersInYear);
};
export default exports.default;