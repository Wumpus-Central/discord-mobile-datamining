// _runtime/metro/04589__.js
import module_4581_mod from "04581__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4581 = module_4581_mod;
if (!module_4581) {
  const obj = { default: module_4581 };
  let tmp3 = obj;
} else {
  tmp3 = module_4581;
}
module_4581 = tmp3;
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
  return module_4581.default(Date.now(), arg0);
};
export default exports.default;