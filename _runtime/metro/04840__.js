// _runtime/metro/04840__.js
import module_4425_mod from "04425__.js";
import _typeof_mod from "04421__.js";
import module_4569_mod from "04569__.js";
import module_4692_mod from "04692__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4569 = module_4569_mod;
if (!module_4569) {
  const obj3 = { default: module_4569 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4569;
}
module_4569 = tmp7;
let module_4692 = module_4692_mod;
if (!module_4692) {
  const obj4 = { default: module_4692 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4692;
}
module_4692 = tmp9;
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
  return module_4569.default(defaultResult1, module_4425.default(arg1) - module_4692.default(defaultResult1));
};
export default exports.default;