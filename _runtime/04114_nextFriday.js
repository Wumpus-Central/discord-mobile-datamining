// === Module 4114: nextFriday ===

// Module 4114 (nextFriday)
import nextDay from "nextDay" /* 4113 */;
import requiredArgs from "requiredArgs" /* 3726 */;

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

export default function nextFriday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 5);
};
export default exports.default;