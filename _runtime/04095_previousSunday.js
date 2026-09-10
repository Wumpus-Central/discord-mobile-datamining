// === Module 4095: previousSunday ===

// Module 4095 (previousSunday)
import requiredArgs from "requiredArgs" /* 3694 */;
import previousDay from "previousDay" /* 4091 */;

if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!previousDay) {
  obj = { default: previousDay };
  let tmp5 = obj;
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousSunday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 0);
};
export default exports.default;