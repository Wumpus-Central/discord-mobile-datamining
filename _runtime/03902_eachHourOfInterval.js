// === Module 3902: eachHourOfInterval ===

// Module 3902 (eachHourOfInterval)
import module_3849 from "module_3849" /* 3849 */;
import _typeof from "module_3695" /* 3695 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3849) {
  let obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
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

export default function eachHourOfInterval(arg0, step) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  let defaultResult1 = _typeof.default(obj.start);
  const time = defaultResult1.getTime();
  const time1 = _typeof.default(obj.end).getTime();
  if (time <= time1) {
    defaultResult1.setMinutes(0, 0, 0);
    step = undefined;
    if (null != step) {
      step = step.step;
    }
    let num2 = 1;
    if (null !== step) {
      num2 = 1;
      if (undefined !== step) {
        num2 = step;
      }
    }
    const NumberResult = Number(num2);
    if (NumberResult >= 1) {
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        const items = [];
        if (defaultResult1.getTime() <= time1) {
          do {
            let arr = items.push(_typeof.default(defaultResult1));
            let defaultResult3 = module_3849.default(defaultResult1, NumberResult);
            defaultResult1 = defaultResult3;
            time2 = defaultResult3.getTime();
          } while (time2 <= time1);
        }
        return items;
      }
    }
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("`options.step` must be a number greater than 1");
    throw rangeError;
  } else {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("Invalid interval");
    throw rangeError1;
  }
  const defaultResult2 = _typeof.default(obj.end);
};
export default exports.default;