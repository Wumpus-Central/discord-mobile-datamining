// _runtime/metro/04650__.js
import module_4639_mod from "04639__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4639 = module_4639_mod;
if (!module_4639) {
  const obj = { default: module_4639 };
  let tmp3 = obj;
} else {
  tmp3 = module_4639;
}
module_4639 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4639.default(Date.now(), arg0);
};
export default exports.default;