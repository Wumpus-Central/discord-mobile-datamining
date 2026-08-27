// === Module 8586: ? ===

// Module 8586
import baseFlatten from "baseFlatten" /* 4599 */;
import baseRest from "baseRest" /* 8587 */;
import isIterateeCall from "isIterateeCall" /* 8588 */;
import baseOrderBy from "baseOrderBy" /* 8589 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (isIterateeCall(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = isIterateeCall(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});