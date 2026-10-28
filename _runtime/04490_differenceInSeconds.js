// === Module 4490: differenceInSeconds ===

// Module 4490 (differenceInSeconds)
import _mod4481 from "module_4481" /* 4481 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4480 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let differenceInMilliseconds = differenceInMilliseconds_mod;
if (!differenceInMilliseconds) {
  const obj = { default: differenceInMilliseconds };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
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
  return _mod4481.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;