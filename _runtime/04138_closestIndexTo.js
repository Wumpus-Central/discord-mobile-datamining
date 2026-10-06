// _runtime/04138_closestIndexTo.js
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function closestIndexTo(arg0, arg1) {
  let NaN;
  let absolute;
  let closure_2;
  let defaultResult = absolute.default(2, arguments);
  const defaultResult1 = NaN.default(arg0);
  if (isNaN(Number(defaultResult1))) {
    return NaN;
  } else {
    let items;
    const time = defaultResult1.getTime();
    if (null == arg1) {
      items = [];
    } else {
      items = arg1;
      if (typeof arg1.forEach !== "function") {
        const _Array = Array;
        items = slice.call(arg1);
      }
    }
    const item = items.forEach((item, index) => {
      const defaultResult = toDate.default(item);
      if (isNaN(Number(defaultResult))) {
        NaN = NaN;
        absolute = NaN;
      } else {
        const _Math = Math;
        absolute = Math.abs(closure_2 - defaultResult.getTime());
        let tmp5 = null == NaN;
        if (!tmp5) {
          const _Number = Number;
          tmp5 = absolute < Number(absolute);
        }
        if (tmp5) {
          NaN = index;
        }
      }
    });
    return NaN;
  }
}
