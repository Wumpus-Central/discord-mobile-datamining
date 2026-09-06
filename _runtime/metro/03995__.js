// _runtime/metro/03995__.js
import startOfHour from "../03996_startOfHour.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!startOfHour) {
  let obj = { default: startOfHour };
  let tmp3 = obj;
} else {
  tmp3 = startOfHour;
}
startOfHour = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameHour(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfHour.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfHour.default(arg1).getTime();
};
export default exports.default;