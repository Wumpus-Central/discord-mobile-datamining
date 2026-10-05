// === Module 4133: closestTo ===

// Module 4133 (closestTo)
import toDate_mod from "toDate" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

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

export default function closestTo(arg0, arg1) {
  let absolute;
  let closure_2;
  let date;
  let defaultResult = absolute.default(2, arguments);
  const defaultResult1 = date.default(arg0);
  if (isNaN(Number(defaultResult1))) {
    let _Date = Date;
    let self = this;
    let self2 = this;
    date = new Date(NaN);
    return date;
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
    const item = items.forEach(function(item) {
      const defaultResult = toDate.default(item);
      if (isNaN(Number(defaultResult))) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(NaN);
        absolute = NaN;
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
    let tmp5 = date;
    return date;
  }
};