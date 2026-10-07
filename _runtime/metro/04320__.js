// _runtime/metro/04320__.js
import module_4309_mod from "04309__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4309 = module_4309_mod;
if (!module_4309) {
  const obj = { default: module_4309 };
  let tmp3 = obj;
} else {
  tmp3 = module_4309;
}
module_4309 = tmp3;
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
  return module_4309.default(Date.now(), arg0);
};
export default exports.default;