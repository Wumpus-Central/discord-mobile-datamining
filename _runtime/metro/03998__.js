// _runtime/metro/03998__.js
import startOfWeek from "../03809_startOfWeek.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!startOfWeek) {
  let obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
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