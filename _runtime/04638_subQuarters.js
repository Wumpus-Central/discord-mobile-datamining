// _runtime/04638_subQuarters.js
import module_4205_mod from "metro/04205__.js";
import module_4367_mod from "metro/04367__.js";
import requiredArgs_mod from "04202_requiredArgs.js";

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
let module_4367 = module_4367_mod;
if (!module_4367) {
  const obj2 = { default: module_4367 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4367;
}
module_4367 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4367.default(arg0, -module_4205.default(arg1));
};
export default exports.default;