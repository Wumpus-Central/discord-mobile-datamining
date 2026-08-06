// _runtime/03769_quartersToMonths.js
import requiredArgs from "requiredArgs";
import { keys } from "03542_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function quartersToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * keys.monthsInQuarter);
};
export default exports.default;