// _runtime/metro/04324__.js
import module_4316_mod from "04316__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4316 = module_4316_mod;
if (!module_4316) {
  const obj = { default: module_4316 };
  let tmp3 = obj;
} else {
  tmp3 = module_4316;
}
module_4316 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4316.default(Date.now(), arg0);
};
export default exports.default;