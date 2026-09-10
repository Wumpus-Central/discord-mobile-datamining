// _runtime/04131_subSeconds.js
import 03697__ from "metro/03697__.js";
import 03860__ from "metro/03860__.js";
import requiredArgs from "03694_requiredArgs.js";

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3860) {
  obj = { default: module_3860 };
  let tmp5 = obj;
} else {
  tmp5 = module_3860;
}
module_3860 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3860.default(arg0, -module_3697.default(arg1));
};
export default exports.default;