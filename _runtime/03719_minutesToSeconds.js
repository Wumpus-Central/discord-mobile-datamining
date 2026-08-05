// _runtime/03719_minutesToSeconds.js
import requiredArgs from "requiredArgs";
import { keys } from "03513_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function minutesToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * keys.secondsInMinute);
};
export default exports.default;