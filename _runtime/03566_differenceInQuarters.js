// _runtime/03566_differenceInQuarters.js
import differenceInMonths from "differenceInMonths";
import requiredArgs from "requiredArgs";
import { getRoundingMethod } from "03558_getRoundingMethod.js";

if (!differenceInMonths) {
  let obj = { default: null };
  obj[0] = differenceInMonths;
  let tmp3 = obj;
} else {
  tmp3 = differenceInMonths;
}
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let c3 = tmp5;

export default function differenceInQuarters(arg0, arg1, roundingMethod) {
  tmp5.default(2, arguments);
  const result = tmp3.default(arg0, arg1) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;