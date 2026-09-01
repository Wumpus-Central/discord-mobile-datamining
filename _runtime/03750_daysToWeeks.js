// _runtime/03750_daysToWeeks.js
import keys from "03751_keys.js";
import requiredArgs from "03573_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function daysToWeeks(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.daysInWeek);
};
export default exports.default;