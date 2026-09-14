// === Module 4071: startOfHour ===

// Module 4071 (startOfHour)
import _typeof_mod from "module_3725" /* 3725 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function startOfHour(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
export default exports.default;