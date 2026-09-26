// === Module 4122: differenceInWeeks ===

// Module 4122 (differenceInWeeks)
import _mod4112 from "module_4112" /* 4112 */;
import compareLocalAsc_mod from "compareLocalAsc" /* 4109 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

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
  return _mod4112.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;