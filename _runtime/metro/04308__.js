// _runtime/metro/04308__.js
import module_4300_mod from "04300__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_4300 = module_4300_mod;
if (!module_4300) {
  const obj = { default: module_4300 };
  let tmp3 = obj;
} else {
  tmp3 = module_4300;
}
module_4300 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4300.default(Date.now(), arg0);
};
export default exports.default;