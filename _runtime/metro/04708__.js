// _runtime/metro/04708__.js
import module_4293_mod from "04293__.js";
import _typeof_mod from "04289__.js";
import module_4437_mod from "04437__.js";
import module_4560_mod from "04560__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4437 = module_4437_mod;
if (!module_4437) {
  const obj3 = { default: module_4437 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4437;
}
module_4437 = tmp7;
let module_4560 = module_4560_mod;
if (!module_4560) {
  const obj4 = { default: module_4560 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4560;
}
module_4560 = tmp9;
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
  return module_4437.default(defaultResult1, module_4293.default(arg1) - module_4560.default(defaultResult1));
};
export default exports.default;