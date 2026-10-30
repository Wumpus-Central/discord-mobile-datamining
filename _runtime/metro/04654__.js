// _runtime/metro/04654__.js
import module_4470_mod from "04470__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4470 = module_4470_mod;
if (!module_4470) {
  const obj = { default: module_4470 };
  let tmp3 = obj;
} else {
  tmp3 = module_4470;
}
module_4470 = tmp3;
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
  return module_4470.default(arg0, Date.now());
};
export default exports.default;