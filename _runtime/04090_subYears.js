// _runtime/04090_subYears.js
import 03654__ from "metro/03654__.js";
import 03819__ from "metro/03819__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!module_3819) {
  obj = { default: module_3819 };
  let tmp5 = obj;
} else {
  tmp5 = module_3819;
}
module_3819 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3819.default(arg0, -module_3654.default(arg1));
};
export default exports.default;