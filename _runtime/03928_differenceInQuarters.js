// === Module 3928: differenceInQuarters ===

// Module 3928 (differenceInQuarters)
import _mod3920 from "module_3920" /* 3920 */;
import differenceInMonths_mod from "differenceInMonths" /* 3924 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

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
  return _mod3920.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;