// _runtime/metro/03954__.js
import _typeof from "03693__.js";
import 03697__ from "03697__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3697) {
  obj = { default: module_3697 };
  let tmp5 = obj;
} else {
  tmp5 = module_3697;
}
module_3697 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3697.default(arg0));
};
export default exports.default;