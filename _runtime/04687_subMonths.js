// _runtime/04687_subMonths.js
import module_4258_mod from "metro/04258__.js";
import module_4403_mod from "metro/04403__.js";
import requiredArgs_mod from "04255_requiredArgs.js";

let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj = { default: module_4258 };
  let tmp3 = obj;
} else {
  tmp3 = module_4258;
}
module_4258 = tmp3;
let module_4403 = module_4403_mod;
if (!module_4403) {
  const obj2 = { default: module_4403 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4403;
}
module_4403 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4403.default(arg0, -module_4258.default(arg1));
};
export default exports.default;