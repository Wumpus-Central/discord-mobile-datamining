// _runtime/metro/04616__.js
import module_4602_mod from "04602__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";

let module_4602 = module_4602_mod;
if (!module_4602) {
  const obj = { default: module_4602 };
  let tmp3 = obj;
} else {
  tmp3 = module_4602;
}
module_4602 = tmp3;
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
  return module_4602.default(arg0, Date.now(), arg1);
};
export default exports.default;