// === Module 4550: ? ===

// Module 4550
import _typeof_mod from "module_4289" /* 4289 */;
import module_4293_mod from "module_4293" /* 4293 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj2 = { default: module_4293 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4293;
}
module_4293 = tmp5;
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
  return _typeof.default(1000 * module_4293.default(arg0));
};
export default exports.default;