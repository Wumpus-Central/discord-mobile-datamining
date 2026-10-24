// _runtime/metro/04673__.js
import module_4258_mod from "04258__.js";
import _typeof_mod from "04254__.js";
import module_4402_mod from "04402__.js";
import module_4525_mod from "04525__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";

let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj = { default: module_4258 };
  let tmp3 = obj;
} else {
  tmp3 = module_4258;
}
module_4258 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj3 = { default: module_4402 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4402;
}
module_4402 = tmp7;
let module_4525 = module_4525_mod;
if (!module_4525) {
  const obj4 = { default: module_4525 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4525;
}
module_4525 = tmp9;
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
  return module_4402.default(defaultResult1, module_4258.default(arg1) - module_4525.default(defaultResult1));
};
export default exports.default;