// === Module 4135: endOfHour ===

// Module 4135 (endOfHour)
import _typeof_mod from "module_3913" /* 3913 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

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

export default function endOfHour(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setMinutes(59, 59, 999);
  return defaultResult1;
};
export default exports.default;