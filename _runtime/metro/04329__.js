// _runtime/metro/04329__.js
import module_4145_mod from "04145__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4145 = module_4145_mod;
if (!module_4145) {
  const obj = { default: module_4145 };
  let tmp3 = obj;
} else {
  tmp3 = module_4145;
}
module_4145 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4145.default(arg0, Date.now());
};
export default exports.default;