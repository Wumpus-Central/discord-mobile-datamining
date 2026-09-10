// === Module 3992: ? ===

// Module 3992
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

export default function isFriday(arg0) {
  requiredArgs.default(1, arguments);
  return 5 === _typeof.default(arg0).getDay();
};
export default exports.default;