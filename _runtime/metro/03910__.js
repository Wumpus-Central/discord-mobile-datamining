// === Module 3910: ? ===

// Module 3910
import _typeof_mod from "module_3911" /* 3911 */;
import _typeof_mod from "module_3728" /* 3728 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
}
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
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