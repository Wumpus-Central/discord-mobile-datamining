// _runtime/03640_addWeeks.js
import toInteger from "toInteger" /* 3476 */;
import addDays from "addDays" /* 3620 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addDays) {
  obj = { default: null };
  obj[0] = addDays;
  let tmp5 = obj;
} else {
  tmp5 = addDays;
}
addDays = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addDays.default(arg0, 7 * toInteger.default(arg1));
};
export default exports.default;