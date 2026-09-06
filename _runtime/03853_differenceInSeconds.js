// === Module 3853: differenceInSeconds ===

// Module 3853 (differenceInSeconds)
import _mod3844 from "module_3844" /* 3844 */;
import differenceInMilliseconds from "differenceInMilliseconds" /* 3843 */;
import requiredArgs from "requiredArgs" /* 3651 */;

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
  return _mod3844.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;