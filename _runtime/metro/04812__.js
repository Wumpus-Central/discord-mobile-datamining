// _runtime/metro/04812__.js
import module_4798_mod from "04798__.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4798 = module_4798_mod;
if (!module_4798) {
  const obj = { default: module_4798 };
  let tmp3 = obj;
} else {
  tmp3 = module_4798;
}
module_4798 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4798.default(arg0, Date.now(), arg1);
};
export default exports.default;