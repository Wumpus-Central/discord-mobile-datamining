// _runtime/metro/04650__.js
import module_4235_mod from "04235__.js";
import _typeof_mod from "04231__.js";
import module_4379_mod from "04379__.js";
import module_4502_mod from "04502__.js";
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
let module_4379 = module_4379_mod;
if (!module_4379) {
  const obj3 = { default: module_4379 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4379;
}
module_4379 = tmp7;
let module_4502 = module_4502_mod;
if (!module_4502) {
  const obj4 = { default: module_4502 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4502;
}
module_4502 = tmp9;
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
  return module_4379.default(defaultResult1, module_4235.default(arg1) - module_4502.default(defaultResult1));
};
export default exports.default;