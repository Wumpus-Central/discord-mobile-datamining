// _runtime/metro/04327__.js
import module_4319_mod from "04319__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4319 = module_4319_mod;
if (!module_4319) {
  const obj = { default: module_4319 };
  let tmp3 = obj;
} else {
  tmp3 = module_4319;
}
module_4319 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4319.default(arg0, Date.now());
};
export default exports.default;