// _runtime/metro/04313__.js
import module_4129_mod from "04129__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_4129 = module_4129_mod;
if (!module_4129) {
  const obj = { default: module_4129 };
  let tmp3 = obj;
} else {
  tmp3 = module_4129;
}
module_4129 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4129.default(arg0, Date.now());
};
export default exports.default;