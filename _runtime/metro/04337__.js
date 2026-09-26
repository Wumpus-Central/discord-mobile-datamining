// _runtime/metro/04337__.js
import module_3922_mod from "03922__.js";
import _typeof_mod from "03918__.js";
import module_4066_mod from "04066__.js";
import module_4189_mod from "04189__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj3 = { default: module_4066 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4066;
}
module_4066 = tmp7;
let module_4189 = module_4189_mod;
if (!module_4189) {
  const obj4 = { default: module_4189 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4189;
}
module_4189 = tmp9;
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
  return module_4066.default(defaultResult1, module_3922.default(arg1) - module_4189.default(defaultResult1));
};
export default exports.default;