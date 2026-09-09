// _runtime/metro/03844__.js
import startOfDay from "../03827_startOfDay.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!startOfDay) {
  let obj = { default: startOfDay };
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfDay.default(arg1).getTime();
};
export default exports.default;