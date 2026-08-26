// _runtime/03542_isSameUTCWeek.js
import requiredArgs from "03541_requiredArgs.js";
import startOfUTCWeek from "03543_startOfUTCWeek.js";

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!startOfUTCWeek) {
  obj = { default: null };
  obj[0] = startOfUTCWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;

export default function isSameUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfUTCWeek.default(arg0, arg2);
  const time = defaultResult1.getTime();
  return time === startOfUTCWeek.default(arg1, arg2).getTime();
};
export default exports.default;