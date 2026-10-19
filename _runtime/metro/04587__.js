// _runtime/metro/04587__.js
import module_4576_mod from "04576__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4576 = module_4576_mod;
if (!module_4576) {
  const obj = { default: module_4576 };
  let tmp3 = obj;
} else {
  tmp3 = module_4576;
}
module_4576 = tmp3;
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
  return module_4576.default(Date.now(), arg0);
};
export default exports.default;