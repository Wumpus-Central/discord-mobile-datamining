// _runtime/metro/04454__.js
import module_4293_mod from "04293__.js";
import module_4444_mod from "04444__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let module_4444 = module_4444_mod;
if (!module_4444) {
  const obj2 = { default: module_4444 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4444;
}
module_4444 = tmp5;
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
  return module_4444.default(interval, module_4293.default(arg1) * c3);
};
export default exports.default;