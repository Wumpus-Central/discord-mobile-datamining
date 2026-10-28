// _runtime/metro/04539__.js
import module_4535_mod from "04535__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4535 = module_4535_mod;
if (!module_4535) {
  const obj = { default: module_4535 };
  let tmp3 = obj;
} else {
  tmp3 = module_4535;
}
module_4535 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4535.default(arg0, Date.now(), arg1);
};
export default exports.default;