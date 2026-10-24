// _runtime/04690_subMinutes.js
import module_4419_mod from "metro/04419__.js";
import requiredArgs_mod from "04255_requiredArgs.js";
import module_4258_mod from "metro/04258__.js";

let module_4419 = module_4419_mod;
if (!module_4419) {
  const obj = { default: module_4419 };
  let tmp3 = obj;
} else {
  tmp3 = module_4419;
}
module_4419 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj3 = { default: module_4258 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4258;
}
module_4258 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4419.default(arg0, -module_4258.default(arg1));
};
export default exports.default;