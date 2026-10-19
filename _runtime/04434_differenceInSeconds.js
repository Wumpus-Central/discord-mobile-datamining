// === Module 4434: differenceInSeconds ===

// Module 4434 (differenceInSeconds)
import _mod4425 from "module_4425" /* 4425 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4424 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

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
  return _mod4425.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;