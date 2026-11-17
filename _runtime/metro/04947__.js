// _runtime/metro/04947__.js
import module_4939_mod from "04939__.js";
import requiredArgs_mod from "../04590_requiredArgs.js";

let module_4939 = module_4939_mod;
if (!module_4939) {
  const obj = { default: module_4939 };
  let tmp3 = obj;
} else {
  tmp3 = module_4939;
}
module_4939 = tmp3;
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
  return module_4939.default(Date.now(), arg0);
};
export default exports.default;