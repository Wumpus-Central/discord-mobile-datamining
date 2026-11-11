// === Module 4783: ? ===

// Module 4783
import _typeof_mod from "module_4522" /* 4522 */;
import module_4526_mod from "module_4526" /* 4526 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj2 = { default: module_4526 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4526;
}
module_4526 = tmp5;
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
  return _typeof.default(1000 * module_4526.default(arg0));
};
export default exports.default;