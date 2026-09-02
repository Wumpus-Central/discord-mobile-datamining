// _runtime/03982_secondsToMinutes.js
import keys from "03750_keys.js";
import requiredArgs from "03572_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / keys.secondsInMinute);
};
export default exports.default;