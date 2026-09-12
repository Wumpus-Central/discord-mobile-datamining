// === Module 4128: previousThursday ===

// Module 4128 (previousThursday)
import requiredArgs from "requiredArgs" /* 3726 */;
import previousDay from "previousDay" /* 4123 */;

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

export default function previousThursday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 4);
};
export default exports.default;