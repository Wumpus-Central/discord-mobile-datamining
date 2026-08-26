// _runtime/03890_isSameMinute.js
import startOfMinute from "03749_startOfMinute.js";
import requiredArgs from "03541_requiredArgs.js";

if (!startOfMinute) {
  let obj = { default: null };
  obj[0] = startOfMinute;
  let tmp3 = obj;
} else {
  tmp3 = startOfMinute;
}
startOfMinute = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameMinute(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfMinute.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfMinute.default(arg1).getTime();
};
export default exports.default;