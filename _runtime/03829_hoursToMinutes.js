// _runtime/03829_hoursToMinutes.js
import keys from "03719_keys.js";
import requiredArgs from "03541_requiredArgs.js";

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