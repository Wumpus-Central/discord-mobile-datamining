// === Module 4515: ? ===

// Module 4515
import _typeof_mod from "module_4254" /* 4254 */;
import module_4258_mod from "module_4258" /* 4258 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj2 = { default: module_4258 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4258;
}
module_4258 = tmp5;
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
  return _typeof.default(1000 * module_4258.default(arg0));
};
export default exports.default;