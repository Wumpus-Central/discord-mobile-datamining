// _runtime/metro/04211__.js
import module_4209_mod from "04209__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4209 = module_4209_mod;
if (!module_4209) {
  const obj = { default: module_4209 };
  let tmp3 = obj;
} else {
  tmp3 = module_4209;
}
module_4209 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4209.default(arg0, Date.now(), arg1);
};
export default exports.default;