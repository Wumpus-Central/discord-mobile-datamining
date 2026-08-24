// === Module 3679: differenceInWeeks ===

// Module 3679 (differenceInWeeks)
import getRoundingMethod from "getRoundingMethod" /* 3669 */;
import compareLocalAsc from "compareLocalAsc" /* 3666 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!compareLocalAsc) {
  let obj = { default: null };
  obj[0] = compareLocalAsc;
  let tmp3 = obj;
} else {
  tmp3 = compareLocalAsc;
}
compareLocalAsc = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
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
  return getRoundingMethod.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;