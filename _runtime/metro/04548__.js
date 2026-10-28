// === Module 4548: ? ===

// Module 4548
import _typeof_mod from "module_4287" /* 4287 */;
import module_4291_mod from "module_4291" /* 4291 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj2 = { default: module_4291 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4291;
}
module_4291 = tmp5;
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
  return _typeof.default(1000 * module_4291.default(arg0));
};
export default exports.default;