// _runtime/03841_isTomorrow.js
import addDays from "03623_addDays.js";
import isSameDay from "03656_isSameDay.js";
import requiredArgs from "03476_requiredArgs.js";

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
addDays = tmp3;
if (!isSameDay) {
  obj = { default: null };
  obj[0] = isSameDay;
  let tmp5 = obj;
} else {
  tmp5 = isSameDay;
}
isSameDay = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, addDays.default(Date.now(), 1));
};
export default exports.default;