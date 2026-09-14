// _runtime/metro/04091__.js
import module_3873_mod from "03873__.js";
import module_3906_mod from "03906__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_3873 = module_3873_mod;
if (!module_3873) {
  const obj = { default: module_3873 };
  let tmp3 = obj;
} else {
  tmp3 = module_3873;
}
module_3873 = tmp3;
let module_3906 = module_3906_mod;
if (!module_3906) {
  const obj2 = { default: module_3906 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3906;
}
module_3906 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3906.default(arg0, module_3873.default(Date.now(), 1));
};
export default exports.default;