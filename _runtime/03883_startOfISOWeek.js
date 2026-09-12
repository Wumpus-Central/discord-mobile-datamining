// === Module 3883: startOfISOWeek ===

// Module 3883 (startOfISOWeek)
import startOfWeek from "startOfWeek" /* 3884 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!startOfWeek) {
  let obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function startOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return startOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;