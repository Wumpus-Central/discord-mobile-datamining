// === Module 4711: ? ===

// Module 4711
import module_4292_mod from "module_4292" /* 4292 */;
import _typeof_mod from "module_4288" /* 4288 */;
import module_4701_mod from "module_4701" /* 4701 */;
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
let module_4701 = module_4701_mod;
if (!module_4701) {
  const obj3 = { default: module_4701 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4701;
}
module_4701 = tmp7;
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
  const diff = module_4292.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4701.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;