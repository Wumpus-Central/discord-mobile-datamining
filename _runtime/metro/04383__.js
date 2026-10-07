// _runtime/metro/04383__.js
import module_3968_mod from "03968__.js";
import _typeof_mod from "03964__.js";
import module_4112_mod from "04112__.js";
import module_4235_mod from "04235__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

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