// _runtime/03705_subMilliseconds.js
import addMilliseconds from "addMilliseconds" /* 3627 */;
import requiredArgs from "requiredArgs" /* 3473 */;
import toInteger from "toInteger" /* 3476 */;

if (!addMilliseconds) {
  let obj = { default: null };
  obj[0] = addMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = addMilliseconds;
}
addMilliseconds = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(arg0, -toInteger.default(arg1));
};
export default exports.default;