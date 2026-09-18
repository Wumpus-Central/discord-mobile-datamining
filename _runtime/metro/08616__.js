// === Module 8616: ? ===

// Module 8616
import baseFlatten from "baseFlatten" /* 4832 */;
import baseRest from "baseRest" /* 8617 */;
import _mod8618 from "module_8618" /* 8618 */;
import baseOrderBy from "baseOrderBy" /* 8619 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8618(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8618(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});