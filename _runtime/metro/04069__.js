// === Module 4069: ? ===

// Module 4069
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

export default function isPast(date) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(date).getTime();
  return time < Date.now();
};
export default exports.default;