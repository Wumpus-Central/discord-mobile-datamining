// === Module 3738: differenceInMinutes ===

// Module 3738 (differenceInMinutes)
import keys from "keys" /* 3720 */;
import getRoundingMethod from "getRoundingMethod" /* 3735 */;
import differenceInMilliseconds from "differenceInMilliseconds" /* 3734 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!differenceInMilliseconds) {
  let obj = { default: null };
  obj[0] = differenceInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / keys.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;