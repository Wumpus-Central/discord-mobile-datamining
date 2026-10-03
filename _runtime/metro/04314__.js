// _runtime/metro/04314__.js
import module_4303_mod from "04303__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4303 = module_4303_mod;
if (!module_4303) {
  const obj = { default: module_4303 };
  let tmp3 = obj;
} else {
  tmp3 = module_4303;
}
module_4303 = tmp3;
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
  return module_4303.default(Date.now(), arg0);
};
export default exports.default;