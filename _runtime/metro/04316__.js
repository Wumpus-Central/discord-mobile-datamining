// _runtime/metro/04316__.js
import module_4308_mod from "04308__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4308 = module_4308_mod;
if (!module_4308) {
  const obj = { default: module_4308 };
  let tmp3 = obj;
} else {
  tmp3 = module_4308;
}
module_4308 = tmp3;
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
  return module_4308.default(Date.now(), arg0);
};
export default exports.default;