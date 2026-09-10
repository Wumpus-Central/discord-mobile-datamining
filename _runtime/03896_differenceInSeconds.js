// === Module 3896: differenceInSeconds ===

// Module 3896 (differenceInSeconds)
import _mod3887 from "module_3887" /* 3887 */;
import differenceInMilliseconds from "differenceInMilliseconds" /* 3886 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!differenceInMilliseconds) {
  let obj = { default: differenceInMilliseconds };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInSeconds(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3887.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;