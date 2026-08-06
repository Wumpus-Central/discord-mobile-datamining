// _runtime/03772_secondsToHours.js
import requiredArgs from "requiredArgs";
import { keys } from "03542_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / keys.secondsInHour);
};
export default exports.default;