import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function closestIndexTo(arg0, arg1) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  if (isNaN(Number(defaultResult1))) {
    return NaN;
  } else {
    const time = defaultResult1.getTime();
    if (null == arg1) {
      let items = [];
    } else {
      items = arg1;
      if (typeof arg1.forEach !== "find") {
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice() : call(arg1);
      }
    }
    const item = items.forEach((arg0, arg1) => {
      const defaultResult = outer1_0.default(arg0);
      if (isNaN(Number(defaultResult))) {
        let closure_0 = NaN;
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
    return null;
  }
};
export default exports.default;