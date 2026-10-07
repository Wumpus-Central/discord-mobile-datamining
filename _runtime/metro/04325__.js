// _runtime/metro/04325__.js
import module_4317_mod from "04317__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4317 = module_4317_mod;
if (!module_4317) {
  const obj = { default: module_4317 };
  let tmp3 = obj;
} else {
  tmp3 = module_4317;
}
module_4317 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4317.default(Date.now(), arg0);
};
export default exports.default;