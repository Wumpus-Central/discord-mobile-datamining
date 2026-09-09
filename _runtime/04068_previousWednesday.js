// === Module 4068: previousWednesday ===

// Module 4068 (previousWednesday)
import requiredArgs from "requiredArgs" /* 3664 */;
import previousDay from "previousDay" /* 4061 */;

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

export default function previousWednesday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 3);
};
export default exports.default;