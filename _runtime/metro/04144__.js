// _runtime/metro/04144__.js
import module_3729_mod from "03729__.js";
import _typeof_mod from "03725__.js";
import module_3873_mod from "03873__.js";
import module_3996_mod from "03996__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3873 = module_3873_mod;
if (!module_3873) {
  const obj3 = { default: module_3873 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3873;
}
module_3873 = tmp7;
let module_3996 = module_3996_mod;
if (!module_3996) {
  const obj4 = { default: module_3996 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3996;
}
module_3996 = tmp9;
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
  return module_3873.default(defaultResult1, module_3729.default(arg1) - module_3996.default(defaultResult1));
};
export default exports.default;