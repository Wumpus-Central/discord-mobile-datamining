// _runtime/metro/04235__.js
import module_3919_mod from "03919__.js";
import _typeof_mod from "03915__.js";
import module_4151_mod from "04151__.js";
import requiredArgs_mod from "../03916_requiredArgs.js";

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4151 = module_4151_mod;
if (!module_4151) {
  const obj3 = { default: module_4151 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4151;
}
module_4151 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4151.default(defaultResult1) - module_3919.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;