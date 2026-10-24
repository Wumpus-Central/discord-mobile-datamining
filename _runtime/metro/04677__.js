// _runtime/metro/04677__.js
import module_4258_mod from "04258__.js";
import _typeof_mod from "04254__.js";
import module_4667_mod from "04667__.js";
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
let module_4667 = module_4667_mod;
if (!module_4667) {
  const obj3 = { default: module_4667 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4667;
}
module_4667 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4258.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4667.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;