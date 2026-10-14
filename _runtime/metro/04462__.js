// === Module 4462: ? ===

// Module 4462
import _typeof_mod from "module_4201" /* 4201 */;
import module_4205_mod from "module_4205" /* 4205 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj2 = { default: module_4205 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4205;
}
module_4205 = tmp5;
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
  return _typeof.default(1000 * module_4205.default(arg0));
};
export default exports.default;