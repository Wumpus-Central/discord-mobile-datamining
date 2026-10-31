// _runtime/metro/04653__.js
import module_4645_mod from "04645__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4645 = module_4645_mod;
if (!module_4645) {
  const obj = { default: module_4645 };
  let tmp3 = obj;
} else {
  tmp3 = module_4645;
}
module_4645 = tmp3;
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
  return module_4645.default(Date.now(), arg0);
};
export default exports.default;