// === Module 3958: ? ===

// Module 3958
import _typeof from "module_3693" /* 3693 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getDaysInMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const month = defaultResult1.getMonth();
  const date = new Date(0);
  date.setFullYear(fullYear, month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date.getDate();
};
export default exports.default;