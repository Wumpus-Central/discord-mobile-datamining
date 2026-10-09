// _runtime/metro/04517__.js
import module_4509_mod from "04509__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4509 = module_4509_mod;
if (!module_4509) {
  const obj = { default: module_4509 };
  let tmp3 = obj;
} else {
  tmp3 = module_4509;
}
module_4509 = tmp3;
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
  return module_4509.default(Date.now(), arg0);
};
export default exports.default;