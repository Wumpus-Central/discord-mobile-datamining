// === Module 3716: closestTo ===

// Module 3716 (closestTo)
import _typeof from "_typeof" /* 3541 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function closestTo(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if (isNaN(Number(defaultResult1))) {
    let _Date = Date;
    let date = new Date(NaN);
    return date;
  } else {
    const time = defaultResult1.getTime();
    if (null == arg1) {
      let items = [];
    } else {
      items = arg1;
      if (typeof arg1.forEach !== "function") {
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice() : call(arg1);
      }
    }
    const item = items.forEach((arg0) => {
      const defaultResult = closure_1_0.default(arg0);
      if (isNaN(Number(defaultResult))) {
        const _Date = Date;
        let date = new Date(NaN);
        let absolute = NaN;
      } else {
        const _Math = Math;
        absolute = Math.abs(closure_2 - defaultResult.getTime());
        let tmp5 = null == date;
        if (!tmp5) {
          const _Number = Number;
          tmp5 = absolute < Number(absolute);
        }
        if (tmp5) {
          date = defaultResult;
        }
      }
    });
    return _typeof;
  }
};
export default exports.default;