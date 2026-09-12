// === Module 3876: ? ===

// Module 3876
import _typeof from "module_3725" /* 3725 */;
import requiredArgs from "requiredArgs" /* 3726 */;

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

export default function isWeekend(arg0) {
  requiredArgs.default(1, arguments);
  const day = _typeof.default(arg0).getDay();
  let tmp3 = 0 === day;
  if (!tmp3) {
    tmp3 = 6 === day;
  }
  return tmp3;
};
export default exports.default;