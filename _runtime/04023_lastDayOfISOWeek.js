// === Module 4023: lastDayOfISOWeek ===

// Module 4023 (lastDayOfISOWeek)
import lastDayOfWeek from "lastDayOfWeek" /* 4024 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!lastDayOfWeek) {
  let obj = { default: lastDayOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = lastDayOfWeek;
}
lastDayOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
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