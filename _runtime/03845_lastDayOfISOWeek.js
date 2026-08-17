// _runtime/03845_lastDayOfISOWeek.js
import lastDayOfWeek from "03846_lastDayOfWeek.js";
import requiredArgs from "03473_requiredArgs.js";

if (!lastDayOfWeek) {
  let obj = { default: null };
  obj[0] = lastDayOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = lastDayOfWeek;
}
lastDayOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function lastDayOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return lastDayOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;