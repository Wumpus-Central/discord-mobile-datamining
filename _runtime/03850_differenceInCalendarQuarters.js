// _runtime/03850_differenceInCalendarQuarters.js
import 03851__ from "metro/03851__.js";
import _typeof from "metro/03663__.js";
import requiredArgs from "03664_requiredArgs.js";

if (!module_3851) {
  let obj = { default: module_3851 };
  let tmp3 = obj;
} else {
  tmp3 = module_3851;
}
module_3851 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function differenceInCalendarQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (module_3851.default(defaultResult1) - module_3851.default(defaultResult2));
};
export default exports.default;