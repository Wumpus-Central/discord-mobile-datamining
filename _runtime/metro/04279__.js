// _runtime/metro/04279__.js
import module_4271_mod from "04271__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_4271 = module_4271_mod;
if (!module_4271) {
  const obj = { default: module_4271 };
  let tmp3 = obj;
} else {
  tmp3 = module_4271;
}
module_4271 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4271.default(Date.now(), arg0);
};
export default exports.default;