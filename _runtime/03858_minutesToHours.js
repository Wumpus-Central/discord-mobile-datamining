// _runtime/03858_minutesToHours.js
import keys from "03654_keys.js";
import requiredArgs from "03476_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.minutesInHour);
};
export default exports.default;