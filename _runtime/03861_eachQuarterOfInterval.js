// _runtime/03861_eachQuarterOfInterval.js
import 03816__ from "metro/03816__.js";
import startOfQuarter from "03862_startOfQuarter.js";
import _typeof from "metro/03650__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3816) {
  let obj = { default: module_3816 };
  let tmp3 = obj;
} else {
  tmp3 = module_3816;
}
module_3816 = tmp3;
if (!startOfQuarter) {
  obj = { default: startOfQuarter };
  let tmp5 = obj;
} else {
  tmp5 = startOfQuarter;
}
startOfQuarter = tmp5;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachQuarterOfInterval(arg0) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  const defaultResult2 = _typeof.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = startOfQuarter.default(defaultResult1);
    const time1 = startOfQuarter.default(defaultResult2).getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let arr = items.push(_typeof.default(defaultResult3));
        let defaultResult5 = module_3816.default(defaultResult3, 1);
        defaultResult3 = defaultResult5;
        time2 = defaultResult5.getTime();
      } while (time2 <= time1);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
};
export default exports.default;