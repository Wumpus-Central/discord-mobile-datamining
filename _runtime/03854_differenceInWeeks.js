// === Module 3854: differenceInWeeks ===

// Module 3854 (differenceInWeeks)
import _mod3844 from "module_3844" /* 3844 */;
import compareLocalAsc from "compareLocalAsc" /* 3841 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!compareLocalAsc) {
  let obj = { default: compareLocalAsc };
  let tmp3 = obj;
} else {
  tmp3 = compareLocalAsc;
}
compareLocalAsc = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
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
  return _mod3844.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;