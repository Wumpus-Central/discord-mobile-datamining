// === Module 4791: differenceInQuarters ===

// Module 4791 (differenceInQuarters)
import _mod4783 from "module_4783" /* 4783 */;
import differenceInMonths_mod from "differenceInMonths" /* 4787 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  const obj = { default: differenceInMonths };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMonths;
}
differenceInMonths = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
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
  return _mod4783.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;