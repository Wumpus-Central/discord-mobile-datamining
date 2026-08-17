// _runtime/03828_isThisHour.js
import isSameHour from "isSameHour" /* 3817 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!isSameHour) {
  let obj = { default: null };
  obj[0] = isSameHour;
  let tmp3 = obj;
} else {
  tmp3 = isSameHour;
}
isSameHour = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return isSameHour.default(Date.now(), arg0);
};
export default exports.default;