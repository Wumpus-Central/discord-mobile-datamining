// === Module 3987: ? ===

// Module 3987
import _typeof_mod from "module_3726" /* 3726 */;
import module_3730_mod from "module_3730" /* 3730 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj2 = { default: module_3730 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3730;
}
module_3730 = tmp5;
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
  return _typeof.default(1000 * module_3730.default(arg0));
};
export default exports.default;