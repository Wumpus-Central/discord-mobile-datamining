// _runtime/03670_hoursToSeconds.js
import requiredArgs from "requiredArgs";
import { keys } from "03559_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function hoursToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * keys.secondsInHour);
};
export default exports.default;