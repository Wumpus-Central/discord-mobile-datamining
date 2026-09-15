// === Module 3989: ? ===

// Module 3989
import _typeof_mod from "module_3728" /* 3728 */;
import module_3732_mod from "module_3732" /* 3732 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj2 = { default: module_3732 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3732;
}
module_3732 = tmp5;
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
  return _typeof.default(1000 * module_3732.default(arg0));
};
export default exports.default;