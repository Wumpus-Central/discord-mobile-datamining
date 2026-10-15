// _runtime/metro/04420__.js
import module_4259_mod from "04259__.js";
import module_4410_mod from "04410__.js";
import requiredArgs_mod from "../04256_requiredArgs.js";

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
let module_4410 = module_4410_mod;
if (!module_4410) {
  const obj2 = { default: module_4410 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4410;
}
module_4410 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4410.default(interval, module_4259.default(arg1) * c3);
};
export default exports.default;