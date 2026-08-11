// _runtime/03779_millisecondsToHours.js
import requiredArgs from "requiredArgs";
import { keys } from "03578_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / keys.millisecondsInHour);
};
export default exports.default;