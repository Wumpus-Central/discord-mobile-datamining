// === Module 3895: differenceInQuarters ===

// Module 3895 (differenceInQuarters)
import _mod3887 from "module_3887" /* 3887 */;
import differenceInMonths from "differenceInMonths" /* 3891 */;
import requiredArgs from "requiredArgs" /* 3694 */;

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
  return _mod3887.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;