// _runtime/metro/04577__.js
import module_4162_mod from "04162__.js";
import _typeof_mod from "04158__.js";
import module_4306_mod from "04306__.js";
import module_4429_mod from "04429__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4306 = module_4306_mod;
if (!module_4306) {
  const obj3 = { default: module_4306 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4306;
}
module_4306 = tmp7;
let module_4429 = module_4429_mod;
if (!module_4429) {
  const obj4 = { default: module_4429 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4429;
}
module_4429 = tmp9;
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
  return module_4306.default(defaultResult1, module_4162.default(arg1) - module_4429.default(defaultResult1));
};
export default exports.default;