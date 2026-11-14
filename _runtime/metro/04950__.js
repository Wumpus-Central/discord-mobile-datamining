// _runtime/metro/04950__.js
import module_4766_mod from "04766__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4766 = module_4766_mod;
if (!module_4766) {
  const obj = { default: module_4766 };
  let tmp3 = obj;
} else {
  tmp3 = module_4766;
}
module_4766 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4766.default(arg0, Date.now());
};
export default exports.default;