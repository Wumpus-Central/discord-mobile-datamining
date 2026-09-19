// === Module 4055: eachMonthOfInterval ===

// Module 4055 (eachMonthOfInterval)
import _typeof_mod from "module_3845" /* 3845 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function eachMonthOfInterval(arg0) {
  let time1;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  const time = _typeof.default(obj.end).getTime();
  if (defaultResult1.getTime() <= time) {
    const items = [];
    defaultResult1.setHours(0, 0, 0, 0);
    defaultResult1.setDate(1);
    if (defaultResult1.getTime() <= time) {
      do {
        let arr = items.push(_typeof.default(defaultResult1));
        let setMonthResult = defaultResult1.setMonth(defaultResult1.getMonth() + 1);
        time1 = defaultResult1.getTime();
      } while (time1 <= time);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult2 = _typeof.default(obj.end);
};
export default exports.default;