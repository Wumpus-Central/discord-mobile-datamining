// _runtime/04042_nextSunday.js
import nextDay from "04038_nextDay.js";
import requiredArgs from "03651_requiredArgs.js";

if (!nextDay) {
  let obj = { default: nextDay };
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextSunday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 0);
};
export default exports.default;