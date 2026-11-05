// _runtime/metro/04842__.js
import module_4427_mod from "04427__.js";
import _typeof_mod from "04423__.js";
import module_4571_mod from "04571__.js";
import module_4694_mod from "04694__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj3 = { default: module_4571 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4571;
}
module_4571 = tmp7;
let module_4694 = module_4694_mod;
if (!module_4694) {
  const obj4 = { default: module_4694 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4694;
}
module_4694 = tmp9;
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
  return module_4571.default(defaultResult1, module_4427.default(arg1) - module_4694.default(defaultResult1));
};
export default exports.default;