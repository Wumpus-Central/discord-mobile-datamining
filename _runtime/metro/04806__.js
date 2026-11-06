// _runtime/metro/04806__.js
import module_4795_mod from "04795__.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4795 = module_4795_mod;
if (!module_4795) {
  const obj = { default: module_4795 };
  let tmp3 = obj;
} else {
  tmp3 = module_4795;
}
module_4795 = tmp3;
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
  return module_4795.default(Date.now(), arg0);
};
export default exports.default;