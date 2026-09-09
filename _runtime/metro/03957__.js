// === Module 3957: ? ===

// Module 3957
import _typeof from "module_3663" /* 3663 */;
import requiredArgs from "requiredArgs" /* 3664 */;

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

export default function isAfter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = defaultResult1.getTime();
  return time > _typeof.default(arg1).getTime();
};
export default exports.default;