// _runtime/metro/04887__.js
import module_4703_mod from "04703__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4703 = module_4703_mod;
if (!module_4703) {
  const obj = { default: module_4703 };
  let tmp3 = obj;
} else {
  tmp3 = module_4703;
}
module_4703 = tmp3;
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
  return module_4703.default(arg0, Date.now());
};
export default exports.default;