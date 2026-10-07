// === Module 4171: eachHourOfInterval ===

// Module 4171 (eachHourOfInterval)
import module_4118_mod from "module_4118" /* 4118 */;
import _typeof_mod from "module_3964" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4118 = module_4118_mod;
if (!module_4118) {
  let obj = { default: module_4118 };
  let tmp3 = obj;
} else {
  tmp3 = module_4118;
}
module_4118 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
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
            let defaultResult3 = module_4118.default(defaultResult1, NumberResult);
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