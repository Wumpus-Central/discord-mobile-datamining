// _runtime/metro/04674__.js
import module_4259_mod from "04259__.js";
import _typeof_mod from "04255__.js";
import module_4403_mod from "04403__.js";
import module_4526_mod from "04526__.js";
import requiredArgs_mod from "../04256_requiredArgs.js";

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4403 = module_4403_mod;
if (!module_4403) {
  const obj3 = { default: module_4403 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4403;
}
module_4403 = tmp7;
let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj4 = { default: module_4526 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4526;
}
module_4526 = tmp9;
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
  return module_4403.default(defaultResult1, module_4259.default(arg1) - module_4526.default(defaultResult1));
};
export default exports.default;