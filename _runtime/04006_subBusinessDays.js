// === Module 4006: subBusinessDays ===

// Module 4006 (subBusinessDays)
import addBusinessDays from "addBusinessDays" /* 3722 */;
import requiredArgs from "requiredArgs" /* 3573 */;
import toInteger from "toInteger" /* 3576 */;

if (!addBusinessDays) {
  let obj = { default: null };
  obj[0] = addBusinessDays;
  let tmp3 = obj;
} else {
  tmp3 = addBusinessDays;
}
addBusinessDays = tmp3;
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

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addBusinessDays.default(arg0, -toInteger.default(arg1));
};
export default exports.default;