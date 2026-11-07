// _runtime/metro/04776__.js
import module_4765_mod from "04765__.js";
import requiredArgs_mod from "../04421_requiredArgs.js";

let module_4765 = module_4765_mod;
if (!module_4765) {
  const obj = { default: module_4765 };
  let tmp3 = obj;
} else {
  tmp3 = module_4765;
}
module_4765 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4765.default(Date.now(), arg0);
};
export default exports.default;