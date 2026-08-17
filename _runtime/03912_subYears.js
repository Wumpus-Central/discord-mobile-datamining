// _runtime/03912_subYears.js
import toInteger from "toInteger" /* 3476 */;
import addYears from "addYears" /* 3641 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addYears) {
  obj = { default: null };
  obj[0] = addYears;
  let tmp5 = obj;
} else {
  tmp5 = addYears;
}
addYears = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addYears.default(arg0, -toInteger.default(arg1));
};
export default exports.default;