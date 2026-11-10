// _runtime/metro/04782__.js
import module_4774_mod from "04774__.js";
import requiredArgs_mod from "../04423_requiredArgs.js";

let module_4774 = module_4774_mod;
if (!module_4774) {
  const obj = { default: module_4774 };
  let tmp3 = obj;
} else {
  tmp3 = module_4774;
}
module_4774 = tmp3;
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
  return module_4774.default(Date.now(), arg0);
};
export default exports.default;