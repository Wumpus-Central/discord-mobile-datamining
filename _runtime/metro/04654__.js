// _runtime/metro/04654__.js
import module_4436_mod from "04436__.js";
import module_4469_mod from "04469__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj = { default: module_4436 };
  let tmp3 = obj;
} else {
  tmp3 = module_4436;
}
module_4436 = tmp3;
let module_4469 = module_4469_mod;
if (!module_4469) {
  const obj2 = { default: module_4469 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4469;
}
module_4469 = tmp5;
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
  return module_4469.default(arg0, module_4436.default(Date.now(), 1));
};
export default exports.default;