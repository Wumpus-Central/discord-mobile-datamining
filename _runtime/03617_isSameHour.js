import startOfHour from "startOfHour";
import requiredArgs from "requiredArgs";

if (!startOfHour) {
  let obj = { default: null };
  obj[0] = startOfHour;
  let tmp3 = obj;
} else {
  tmp3 = startOfHour;
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

export default function isSameHour(arg0, arg1) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = defaultResult1.getTime();
  return time === tmp3.default(arg1).getTime();
};
export default exports.default;