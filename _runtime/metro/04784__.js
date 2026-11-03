// _runtime/metro/04784__.js
import module_4776_mod from "04776__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4776 = module_4776_mod;
if (!module_4776) {
  const obj = { default: module_4776 };
  let tmp3 = obj;
} else {
  tmp3 = module_4776;
}
module_4776 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4776.default(arg0, Date.now());
};
export default exports.default;