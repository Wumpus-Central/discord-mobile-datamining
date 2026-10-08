// _runtime/metro/04515__.js
import module_4507_mod from "04507__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4507 = module_4507_mod;
if (!module_4507) {
  const obj = { default: module_4507 };
  let tmp3 = obj;
} else {
  tmp3 = module_4507;
}
module_4507 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4507.default(Date.now(), arg0);
};
export default exports.default;