// _runtime/metro/04206__.js
import module_4198_mod from "04198__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_4198 = module_4198_mod;
if (!module_4198) {
  const obj = { default: module_4198 };
  let tmp3 = obj;
} else {
  tmp3 = module_4198;
}
module_4198 = tmp3;
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
  return module_4198.default(Date.now(), arg0);
};
export default exports.default;