// === Module 4707: ? ===

// Module 4707
import module_4291_mod from "module_4291" /* 4291 */;
import _typeof_mod from "module_4287" /* 4287 */;
import module_4559_mod from "module_4559" /* 4559 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4559 = module_4559_mod;
if (!module_4559) {
  const obj3 = { default: module_4559 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4559;
}
module_4559 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4559.default(defaultResult1) - module_4291.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;