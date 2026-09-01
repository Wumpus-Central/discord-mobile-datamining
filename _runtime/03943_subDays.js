// === Module 3943: subDays ===

// Module 3943 (subDays)
import addDays from "addDays" /* 3720 */;
import requiredArgs from "requiredArgs" /* 3573 */;
import toInteger from "toInteger" /* 3576 */;

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
addDays = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addDays.default(arg0, -toInteger.default(arg1));
};
export default exports.default;