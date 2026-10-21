// _runtime/metro/04406__.js
import module_4256_mod from "04256__.js";
import module_4407_mod from "04407__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj = { default: module_4256 };
  let tmp3 = obj;
} else {
  tmp3 = module_4256;
}
module_4256 = tmp3;
let module_4407 = module_4407_mod;
if (!module_4407) {
  const obj2 = { default: module_4407 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4407;
}
module_4407 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4407.default(interval, module_4256.default(arg1) * c3);
};
export default exports.default;