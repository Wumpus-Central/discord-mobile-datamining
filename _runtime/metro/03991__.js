// === Module 3991: ? ===

// Module 3991
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

export default function isFirstDayOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(arg0).getDate();
};
export default exports.default;