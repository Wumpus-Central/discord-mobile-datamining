// === Module 4176: ? ===

// Module 4176
import _typeof_mod from "module_3915" /* 3915 */;
import module_3919_mod from "module_3919" /* 3919 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj2 = { default: module_3919 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3919;
}
module_3919 = tmp5;
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
  return _typeof.default(1000 * module_3919.default(arg0));
};
export default exports.default;