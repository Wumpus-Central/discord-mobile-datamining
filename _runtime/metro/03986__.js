// === Module 3986: ? ===

// Module 3986
import _typeof_mod from "module_3725" /* 3725 */;
import module_3729_mod from "module_3729" /* 3729 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj2 = { default: module_3729 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3729;
}
module_3729 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3729.default(arg0));
};
export default exports.default;