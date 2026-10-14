// _runtime/04572_subDays.js
import module_4349_mod from "metro/04349__.js";
import requiredArgs_mod from "04202_requiredArgs.js";
import module_4205_mod from "metro/04205__.js";

let module_4349 = module_4349_mod;
if (!module_4349) {
  const obj = { default: module_4349 };
  let tmp3 = obj;
} else {
  tmp3 = module_4349;
}
module_4349 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj3 = { default: module_4205 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4205;
}
module_4205 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4349.default(arg0, -module_4205.default(arg1));
};
export default exports.default;