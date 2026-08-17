// _runtime/03752_getUnixTime.js
import getTime from "getTime" /* 3751 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!getTime) {
  let obj = { default: null };
  obj[0] = getTime;
  let tmp3 = obj;
} else {
  tmp3 = getTime;
}
getTime = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(getTime.default(arg0) / 1000);
};
export default exports.default;