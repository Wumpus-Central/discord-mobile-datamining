// _runtime/03650_closestIndexTo.js
import _typeof from "metro/03476__typeof.js";
import requiredArgs from "03477_requiredArgs.js";

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

export default function closestIndexTo(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if (isNaN(Number(defaultResult1))) {
    return NaN;
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
    const item = items.forEach((arg0, arg1) => {
      const defaultResult = closure_1_0.default(arg0);
      if (isNaN(Number(defaultResult))) {
        closure_0 = NaN;
        let absolute = NaN;
      } else {
        const _Math = Math;
        absolute = Math.abs(closure_2 - defaultResult.getTime());
        let tmp5 = null == closure_0;
        if (!tmp5) {
          const _Number = Number;
          tmp5 = absolute < Number(absolute);
        }
        if (tmp5) {
          closure_0 = arg1;
        }
      }
    });
    return _typeof;
  }
};
export default exports.default;