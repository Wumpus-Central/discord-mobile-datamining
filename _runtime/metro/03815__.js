// === Module 3815: ? ===

// Module 3815
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

export default function isSunday(arg0) {
  requiredArgs.default(1, arguments);
  return 0 === _typeof.default(arg0).getDay();
};
export default exports.default;