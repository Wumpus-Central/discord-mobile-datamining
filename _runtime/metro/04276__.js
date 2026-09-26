// _runtime/metro/04276__.js
import module_4268_mod from "04268__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_4268 = module_4268_mod;
if (!module_4268) {
  const obj = { default: module_4268 };
  let tmp3 = obj;
} else {
  tmp3 = module_4268;
}
module_4268 = tmp3;
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
  return module_4268.default(Date.now(), arg0);
};
export default exports.default;