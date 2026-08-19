// === Module 3907: subHours ===

// Module 3907 (subHours)
import addHours from "addHours" /* 3626 */;
import requiredArgs from "requiredArgs" /* 3473 */;
import toInteger from "toInteger" /* 3476 */;

if (!addHours) {
  let obj = { default: null };
  obj[0] = addHours;
  let tmp3 = obj;
} else {
  tmp3 = addHours;
}
addHours = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addHours.default(arg0, -toInteger.default(arg1));
};
export default exports.default;