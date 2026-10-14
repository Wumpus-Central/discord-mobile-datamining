// _runtime/metro/04620__.js
import module_4205_mod from "04205__.js";
import _typeof_mod from "04201__.js";
import module_4349_mod from "04349__.js";
import module_4472_mod from "04472__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4349 = module_4349_mod;
if (!module_4349) {
  const obj3 = { default: module_4349 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4349;
}
module_4349 = tmp7;
let module_4472 = module_4472_mod;
if (!module_4472) {
  const obj4 = { default: module_4472 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4472;
}
module_4472 = tmp9;
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
  return module_4349.default(defaultResult1, module_4205.default(arg1) - module_4472.default(defaultResult1));
};
export default exports.default;