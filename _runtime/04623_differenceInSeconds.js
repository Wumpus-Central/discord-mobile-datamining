// === Module 4623: differenceInSeconds ===

// Module 4623 (differenceInSeconds)
import _mod4614 from "module_4614" /* 4614 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4613 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

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
  return _mod4614.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;