// _runtime/metro/04277__.js
import module_4269_mod from "04269__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_4269 = module_4269_mod;
if (!module_4269) {
  const obj = { default: module_4269 };
  let tmp3 = obj;
} else {
  tmp3 = module_4269;
}
module_4269 = tmp3;
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
  return module_4269.default(Date.now(), arg0);
};
export default exports.default;