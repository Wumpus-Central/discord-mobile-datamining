// === Module 3866: differenceInSeconds ===

// Module 3866 (differenceInSeconds)
import _mod3857 from "module_3857" /* 3857 */;
import differenceInMilliseconds from "differenceInMilliseconds" /* 3856 */;
import requiredArgs from "requiredArgs" /* 3664 */;

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
  return _mod3857.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;