// _runtime/metro/04269__.js
import module_4261_mod from "04261__.js";
import requiredArgs_mod from "../03912_requiredArgs.js";

let module_4261 = module_4261_mod;
if (!module_4261) {
  const obj = { default: module_4261 };
  let tmp3 = obj;
} else {
  tmp3 = module_4261;
}
module_4261 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4261.default(Date.now(), arg0);
};
export default exports.default;