// _runtime/metro/04165__.js
import module_3849_mod from "03849__.js";
import _typeof_mod from "03845__.js";
import module_4081_mod from "04081__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4081 = module_4081_mod;
if (!module_4081) {
  const obj3 = { default: module_4081 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4081;
}
module_4081 = tmp7;
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
  const diff = module_4081.default(defaultResult1) - module_3849.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;