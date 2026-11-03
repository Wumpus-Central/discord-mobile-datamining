// _runtime/metro/04787__.js
import module_4569_mod from "04569__.js";
import module_4602_mod from "04602__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4569 = module_4569_mod;
if (!module_4569) {
  const obj = { default: module_4569 };
  let tmp3 = obj;
} else {
  tmp3 = module_4569;
}
module_4569 = tmp3;
let module_4602 = module_4602_mod;
if (!module_4602) {
  const obj2 = { default: module_4602 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4602;
}
module_4602 = tmp5;
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
  return module_4602.default(arg0, module_4569.default(Date.now(), 1));
};
export default exports.default;