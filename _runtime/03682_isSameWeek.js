// _runtime/03682_isSameWeek.js
import startOfWeek from "startOfWeek";
import requiredArgs from "requiredArgs";

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function isSameWeek(arg0, arg1, arg2) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0, arg2);
  const time = defaultResult1.getTime();
  return time === tmp3.default(arg1, arg2).getTime();
};
export default exports.default;