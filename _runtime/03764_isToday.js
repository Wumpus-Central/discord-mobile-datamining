// _runtime/03764_isToday.js
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";

if (!isSameDay) {
  let obj = { default: null };
  obj[0] = isSameDay;
  let tmp3 = obj;
} else {
  tmp3 = isSameDay;
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

export default function isToday(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, Date.now());
};
export default exports.default;