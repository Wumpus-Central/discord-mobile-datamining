// _runtime/03820_isSameWeek.js
import startOfWeek from "03631_startOfWeek.js";
import requiredArgs from "03473_requiredArgs.js";

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const time = defaultResult1.getTime();
  return time === startOfWeek.default(arg1, arg2).getTime();
};
export default exports.default;