// === Module 4054: nextSaturday ===

// Module 4054 (nextSaturday)
import nextDay from "nextDay" /* 4051 */;
import requiredArgs from "requiredArgs" /* 3664 */;

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

export default function nextSaturday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 6);
};
export default exports.default;