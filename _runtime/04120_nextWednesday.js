// === Module 4120: nextWednesday ===

// Module 4120 (nextWednesday)
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

export default function nextWednesday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 3);
};
export default exports.default;