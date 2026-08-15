// _runtime/03664_differenceInHours.js
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";
import { keys } from "03651_keys.js";
import { getRoundingMethod } from "03666_getRoundingMethod.js";

if (!differenceInMilliseconds) {
  let obj = { default: null };
  obj[0] = differenceInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let c3 = tmp5;

export default function differenceInHours(arg0, arg1, roundingMethod) {
  tmp5.default(2, arguments);
  const result = tmp3.default(arg0, arg1) / keys.millisecondsInHour;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;