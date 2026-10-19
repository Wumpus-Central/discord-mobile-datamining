// _runtime/metro/04590__.js
import module_4582_mod from "04582__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4582 = module_4582_mod;
if (!module_4582) {
  const obj = { default: module_4582 };
  let tmp3 = obj;
} else {
  tmp3 = module_4582;
}
module_4582 = tmp3;
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
  return module_4582.default(Date.now(), arg0);
};
export default exports.default;