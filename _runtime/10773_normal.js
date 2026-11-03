// _runtime/10773_normal.js
import _mod1652 from "metro/01652__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function pnpm_normalTs1(value){let[interpolate,size,vertical]=this.__closure;const translate=interpolate(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};})",
};

export function normalLayout(arg0) {
  items = [closure_2, , ,];
  ({ size, vertical } = arg0);
  items[1] = _mod1652.interpolate;
  items[2] = size;
  items[3] = vertical;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp, tmp2, tmp3, tmp4] = items;
  function pnpm_normalTs1(arg0) {
    items = [-c1, 0, c1];
    const tmp = _undefined(arg0, [-1, 0, 1], items);
    if (c2) {
      const obj2 = { translateY: tmp };
      let obj = obj2;
    } else {
      obj = { translateX: tmp };
    }
    const obj3 = { transform: null };
    const items1 = [obj];
    obj3.transform = items1;
    return obj3;
  }
  let items1 = [tmp2, tmp3, tmp4];
  pnpm_normalTs1.__closure = items1;
  pnpm_normalTs1.__workletHash = 2452399105020;
  pnpm_normalTs1.__initData = tmp;
  return pnpm_normalTs1;
}
