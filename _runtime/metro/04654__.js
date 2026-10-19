// === Module 4654: ? ===

// Module 4654
import module_4235_mod from "module_4235" /* 4235 */;
import _typeof_mod from "module_4231" /* 4231 */;
import module_4644_mod from "module_4644" /* 4644 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4644 = module_4644_mod;
if (!module_4644) {
  const obj3 = { default: module_4644 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4644;
}
module_4644 = tmp7;
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
  const diff = module_4235.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4644.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;