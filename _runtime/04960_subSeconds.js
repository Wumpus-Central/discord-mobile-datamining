// _runtime/04960_subSeconds.js
import module_4526_mod from "metro/04526__.js";
import module_4689_mod from "metro/04689__.js";
import requiredArgs_mod from "04523_requiredArgs.js";

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let module_4689 = module_4689_mod;
if (!module_4689) {
  const obj2 = { default: module_4689 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4689;
}
module_4689 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4689.default(arg0, -module_4526.default(arg1));
};
export default exports.default;