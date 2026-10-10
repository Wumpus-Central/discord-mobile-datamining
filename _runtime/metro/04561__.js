// _runtime/metro/04561__.js
import module_4547_mod from "04547__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4547 = module_4547_mod;
if (!module_4547) {
  const obj = { default: module_4547 };
  let tmp3 = obj;
} else {
  tmp3 = module_4547;
}
module_4547 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4547.default(arg0, Date.now(), arg1);
};
export default exports.default;