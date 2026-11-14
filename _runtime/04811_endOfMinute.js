// === Module 4811: endOfMinute ===

// Module 4811 (endOfMinute)
import _typeof_mod from "module_4585" /* 4585 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

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

export default function endOfMinute(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setSeconds(59, 999);
  return defaultResult1;
};
export default exports.default;