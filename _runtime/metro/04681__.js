// === Module 4681: ? ===

// Module 4681
import module_4262_mod from "module_4262" /* 4262 */;
import _typeof_mod from "module_4258" /* 4258 */;
import module_4671_mod from "module_4671" /* 4671 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4671 = module_4671_mod;
if (!module_4671) {
  const obj3 = { default: module_4671 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4671;
}
module_4671 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4262.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4671.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;