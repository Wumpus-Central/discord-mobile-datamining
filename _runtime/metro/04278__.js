// _runtime/metro/04278__.js
import module_4270_mod from "04270__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_4270 = module_4270_mod;
if (!module_4270) {
  const obj = { default: module_4270 };
  let tmp3 = obj;
} else {
  tmp3 = module_4270;
}
module_4270 = tmp3;
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
  return module_4270.default(Date.now(), arg0);
};
export default exports.default;