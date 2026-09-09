// === Module 8412: ? ===

// Module 8412
import baseFlatten from "baseFlatten" /* 4684 */;
import baseRest from "baseRest" /* 8413 */;
import _mod8414 from "module_8414" /* 8414 */;
import baseOrderBy from "baseOrderBy" /* 8415 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8414(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8414(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});