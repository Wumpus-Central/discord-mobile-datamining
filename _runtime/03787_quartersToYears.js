// _runtime/03787_quartersToYears.js
import requiredArgs from "requiredArgs";
import { keys } from "03559_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function quartersToYears(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / keys.quartersInYear);
};
export default exports.default;