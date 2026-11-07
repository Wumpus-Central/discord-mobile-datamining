// === Module 9030: ? ===

// Module 9030
import baseFlatten from "baseFlatten" /* 5974 */;
import baseRest from "baseRest" /* 9031 */;
import _mod9032 from "module_9032" /* 9032 */;
import baseOrderBy from "baseOrderBy" /* 9033 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod9032(arg0, arg1[0], arg1[1])) {
        items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod9032(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});