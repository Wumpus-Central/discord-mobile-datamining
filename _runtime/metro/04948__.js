// _runtime/metro/04948__.js
import module_4940_mod from "04940__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4940 = module_4940_mod;
if (!module_4940) {
  const obj = { default: module_4940 };
  let tmp3 = obj;
} else {
  tmp3 = module_4940;
}
module_4940 = tmp3;
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
  return module_4940.default(arg0, Date.now());
};
export default exports.default;