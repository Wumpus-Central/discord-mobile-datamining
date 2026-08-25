// === Module 3634: startOfISOWeek ===

// Module 3634 (startOfISOWeek)
import startOfWeek from "startOfWeek" /* 3635 */;
import requiredArgs from "requiredArgs" /* 3477 */;

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
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