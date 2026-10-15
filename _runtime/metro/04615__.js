// _runtime/metro/04615__.js
import module_4607_mod from "04607__.js";
import requiredArgs_mod from "../04256_requiredArgs.js";

let module_4607 = module_4607_mod;
if (!module_4607) {
  const obj = { default: module_4607 };
  let tmp3 = obj;
} else {
  tmp3 = module_4607;
}
module_4607 = tmp3;
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
  return module_4607.default(Date.now(), arg0);
};
export default exports.default;