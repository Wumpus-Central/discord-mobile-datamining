// _runtime/03817_isSameHour.js
import startOfHour from "startOfHour" /* 3818 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!startOfHour) {
  let obj = { default: null };
  obj[0] = startOfHour;
  let tmp3 = obj;
} else {
  tmp3 = startOfHour;
}
startOfHour = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameHour(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfHour.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfHour.default(arg1).getTime();
};
export default exports.default;