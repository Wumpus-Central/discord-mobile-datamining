// _runtime/metro/04565__.js
import module_4347_mod from "04347__.js";
import module_4380_mod from "04380__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4347 = module_4347_mod;
if (!module_4347) {
  const obj = { default: module_4347 };
  let tmp3 = obj;
} else {
  tmp3 = module_4347;
}
module_4347 = tmp3;
let module_4380 = module_4380_mod;
if (!module_4380) {
  const obj2 = { default: module_4380 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4380;
}
module_4380 = tmp5;
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
  return module_4380.default(arg0, module_4347.default(Date.now(), 1));
};
export default exports.default;