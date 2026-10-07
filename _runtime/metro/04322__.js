// _runtime/metro/04322__.js
import module_4314_mod from "04314__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4314 = module_4314_mod;
if (!module_4314) {
  const obj = { default: module_4314 };
  let tmp3 = obj;
} else {
  tmp3 = module_4314;
}
module_4314 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4314.default(Date.now(), arg0);
};
export default exports.default;