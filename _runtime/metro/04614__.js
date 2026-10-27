// _runtime/metro/04614__.js
import module_4606_mod from "04606__.js";
import requiredArgs_mod from "../04256_requiredArgs.js";

let module_4606 = module_4606_mod;
if (!module_4606) {
  const obj = { default: module_4606 };
  let tmp3 = obj;
} else {
  tmp3 = module_4606;
}
module_4606 = tmp3;
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
  return module_4606.default(Date.now(), arg0);
};
export default exports.default;