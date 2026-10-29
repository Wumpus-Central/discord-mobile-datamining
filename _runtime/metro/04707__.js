// === Module 4707: ? ===

// Module 4707
import module_4292_mod from "module_4292" /* 4292 */;
import _typeof_mod from "module_4288" /* 4288 */;
import module_4436_mod from "module_4436" /* 4436 */;
import module_4559_mod from "module_4559" /* 4559 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj3 = { default: module_4436 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4436;
}
module_4436 = tmp7;
let module_4559 = module_4559_mod;
if (!module_4559) {
  const obj4 = { default: module_4559 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4559;
}
module_4559 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_4436.default(defaultResult1, module_4292.default(arg1) - module_4559.default(defaultResult1));
};
export default exports.default;