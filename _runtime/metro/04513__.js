// === Module 4513: ? ===

// Module 4513
import _typeof_mod from "module_4252" /* 4252 */;
import module_4256_mod from "module_4256" /* 4256 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj2 = { default: module_4256 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4256;
}
module_4256 = tmp5;
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
  return _typeof.default(1000 * module_4256.default(arg0));
};
export default exports.default;