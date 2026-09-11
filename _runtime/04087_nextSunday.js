// === Module 4087: nextSunday ===

// Module 4087 (nextSunday)
import nextDay from "nextDay" /* 4083 */;
import requiredArgs from "requiredArgs" /* 3696 */;

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