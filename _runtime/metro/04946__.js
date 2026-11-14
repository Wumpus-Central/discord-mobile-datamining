// _runtime/metro/04946__.js
import module_4938_mod from "04938__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4938 = module_4938_mod;
if (!module_4938) {
  const obj = { default: module_4938 };
  let tmp3 = obj;
} else {
  tmp3 = module_4938;
}
module_4938 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4938.default(Date.now(), arg0);
};
export default exports.default;