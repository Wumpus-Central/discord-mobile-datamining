// === Module 3873: endOfISOWeek ===

// Module 3873 (endOfISOWeek)
import endOfWeek from "endOfWeek" /* 3874 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!endOfWeek) {
  let obj = { default: endOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = endOfWeek;
}
endOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function endOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;