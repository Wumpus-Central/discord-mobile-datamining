// _runtime/03765_hoursToMinutes.js
import keys from "03655_keys.js";
import requiredArgs from "03477_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.minutesInHour);
};
export default exports.default;