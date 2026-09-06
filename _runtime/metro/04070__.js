// _runtime/metro/04070__.js
import 03654__ from "03654__.js";
import _typeof from "03650__.js";
import 03922__ from "03922__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_3922) {
  obj = { default: module_3922 };
  let tmp7 = obj;
} else {
  tmp7 = module_3922;
}
module_3922 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3922.default(defaultResult1) - module_3654.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;