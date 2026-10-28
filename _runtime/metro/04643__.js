// _runtime/metro/04643__.js
import module_4632_mod from "04632__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4632 = module_4632_mod;
if (!module_4632) {
  const obj = { default: module_4632 };
  let tmp3 = obj;
} else {
  tmp3 = module_4632;
}
module_4632 = tmp3;
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
  return module_4632.default(Date.now(), arg0);
};
export default exports.default;