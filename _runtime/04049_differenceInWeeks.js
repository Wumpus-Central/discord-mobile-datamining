// === Module 4049: differenceInWeeks ===

// Module 4049 (differenceInWeeks)
import _mod4039 from "module_4039" /* 4039 */;
import compareLocalAsc_mod from "compareLocalAsc" /* 4036 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let compareLocalAsc = compareLocalAsc_mod;
if (!compareLocalAsc) {
  const obj = { default: compareLocalAsc };
  let tmp3 = obj;
} else {
  tmp3 = compareLocalAsc;
}
compareLocalAsc = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInWeeks(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = compareLocalAsc.default(arg0, arg1) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod4039.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;