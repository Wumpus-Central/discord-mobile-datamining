// === Module 3883: ? ===

// Module 3883
import _typeof from "module_3695" /* 3695 */;
import requiredArgs from "requiredArgs" /* 3696 */;

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

export default function getQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(_typeof.default(arg0).getMonth() / 3) + 1;
};
export default exports.default;