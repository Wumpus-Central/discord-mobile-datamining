// === Module 4520: ? ===

// Module 4520
import _typeof_mod from "module_4252" /* 4252 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

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

export default function getDecade(arg0) {
  requiredArgs.default(1, arguments);
  return 10 * Math.floor(_typeof.default(arg0).getFullYear() / 10);
};
export default exports.default;