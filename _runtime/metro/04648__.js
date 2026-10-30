// _runtime/metro/04648__.js
import module_4640_mod from "04640__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4640 = module_4640_mod;
if (!module_4640) {
  const obj = { default: module_4640 };
  let tmp3 = obj;
} else {
  tmp3 = module_4640;
}
module_4640 = tmp3;
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
  return module_4640.default(Date.now(), arg0);
};
export default exports.default;