// _runtime/metro/04549__.js
import module_4235_mod from "04235__.js";
import _typeof_mod from "04231__.js";
import module_4471_mod from "04471__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

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
let module_4471 = module_4471_mod;
if (!module_4471) {
  const obj3 = { default: module_4471 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4471;
}
module_4471 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4471.default(defaultResult1, arg2) - module_4235.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;