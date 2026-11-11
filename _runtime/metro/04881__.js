// _runtime/metro/04881__.js
import module_4873_mod from "04873__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4873 = module_4873_mod;
if (!module_4873) {
  const obj = { default: module_4873 };
  let tmp3 = obj;
} else {
  tmp3 = module_4873;
}
module_4873 = tmp3;
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
  return module_4873.default(Date.now(), arg0);
};
export default exports.default;