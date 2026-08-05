// _runtime/03366_isSameUTCWeek.js
import requiredArgs from "requiredArgs";
import startOfUTCWeek from "startOfUTCWeek";

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let c0 = tmp3;
if (!startOfUTCWeek) {
  obj = { default: null };
  obj[0] = startOfUTCWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCWeek;
}
let closure_1 = tmp5;

export default function isSameUTCWeek(arg0, arg1, arg2) {
  tmp3.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0, arg2);
  const time = defaultResult1.getTime();
  return time === tmp5.default(arg1, arg2).getTime();
};
export default exports.default;