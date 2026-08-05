// _runtime/03751_monthsToYears.js
import requiredArgs from "requiredArgs";
import { keys } from "03543_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function monthsToYears(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / keys /* keys */.monthsInYear);
};
export default exports.default;