// === Module 3907: ? ===

// Module 3907
import _typeof from "module_3908" /* 3908 */;
import _typeof from "module_3725" /* 3725 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!_typeof) {
  let obj = { default: _typeof };
}
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isValid(num) {
  requiredArgs.default(1, arguments);
  if (!_typeof.default(num)) {
    if (typeof num !== "number") {
      return false;
    }
  }
  return !isNaN(Number(_typeof.default(num)));
};
export default exports.default;