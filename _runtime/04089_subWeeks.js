// === Module 4089: subWeeks ===

// Module 4089 (subWeeks)
import toInteger from "toInteger" /* 3654 */;
import addWeeks from "addWeeks" /* 3818 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addWeeks) {
  obj = { default: null };
  obj[0] = addWeeks;
  let tmp5 = obj;
} else {
  tmp5 = addWeeks;
}
addWeeks = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addWeeks.default(arg0, -toInteger.default(arg1));
};
export default exports.default;