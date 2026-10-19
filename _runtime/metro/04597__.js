// _runtime/metro/04597__.js
import module_4379_mod from "04379__.js";
import module_4412_mod from "04412__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4379 = module_4379_mod;
if (!module_4379) {
  const obj = { default: module_4379 };
  let tmp3 = obj;
} else {
  tmp3 = module_4379;
}
module_4379 = tmp3;
let module_4412 = module_4412_mod;
if (!module_4412) {
  const obj2 = { default: module_4412 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4412;
}
module_4412 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4412.default(arg0, module_4379.default(Date.now(), 1));
};
export default exports.default;