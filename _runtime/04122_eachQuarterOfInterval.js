// === Module 4122: eachQuarterOfInterval ===

// Module 4122 (eachQuarterOfInterval)
import module_4077_mod from "module_4077" /* 4077 */;
import startOfQuarter_mod from "startOfQuarter" /* 4123 */;
import _typeof_mod from "module_3911" /* 3911 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4077 = module_4077_mod;
if (!module_4077) {
  let obj = { default: module_4077 };
  let tmp3 = obj;
} else {
  tmp3 = module_4077;
}
module_4077 = tmp3;
let startOfQuarter = startOfQuarter_mod;
if (!startOfQuarter) {
  const obj2 = { default: startOfQuarter };
  let tmp5 = obj2;
} else {
  tmp5 = startOfQuarter;
}
startOfQuarter = tmp5;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp7 = obj3;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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
        let defaultResult5 = module_4077.default(defaultResult3, 1);
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