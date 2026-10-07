// === Module 4383: ? ===

// Module 4383
import module_3968_mod from "module_3968" /* 3968 */;
import _typeof_mod from "module_3964" /* 3964 */;
import module_4112_mod from "module_4112" /* 4112 */;
import module_4235_mod from "module_4235" /* 4235 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4112 = module_4112_mod;
if (!module_4112) {
  const obj3 = { default: module_4112 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4112;
}
module_4112 = tmp7;
let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj4 = { default: module_4235 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4235;
}
module_4235 = tmp9;
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
  return module_4112.default(defaultResult1, module_3968.default(arg1) - module_4235.default(defaultResult1));
};
export default exports.default;