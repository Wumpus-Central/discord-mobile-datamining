// _runtime/04653_subMilliseconds.js
import module_4575_mod from "metro/04575__.js";
import requiredArgs_mod from "04421_requiredArgs.js";
import module_4424_mod from "metro/04424__.js";

let module_4575 = module_4575_mod;
if (!module_4575) {
  const obj = { default: module_4575 };
  let tmp3 = obj;
} else {
  tmp3 = module_4575;
}
module_4575 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj3 = { default: module_4424 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4424;
}
module_4424 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4575.default(arg0, -module_4424.default(arg1));
};
export default exports.default;