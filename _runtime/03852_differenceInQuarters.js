// === Module 3852: differenceInQuarters ===

// Module 3852 (differenceInQuarters)
import _mod3844 from "module_3844" /* 3844 */;
import differenceInMonths from "differenceInMonths" /* 3848 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!differenceInMonths) {
  let obj = { default: differenceInMonths };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMonths;
}
differenceInMonths = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInQuarters(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(arg0, arg1) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3844.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;