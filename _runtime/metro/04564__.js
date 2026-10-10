// _runtime/metro/04564__.js
import module_4380_mod from "04380__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4380 = module_4380_mod;
if (!module_4380) {
  const obj = { default: module_4380 };
  let tmp3 = obj;
} else {
  tmp3 = module_4380;
}
module_4380 = tmp3;
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
  return module_4380.default(arg0, Date.now());
};
export default exports.default;