// === Module 9048: ? ===

// Module 9048
import baseFlatten from "baseFlatten" /* 6001 */;
import baseRest from "baseRest" /* 9049 */;
import _mod9050 from "module_9050" /* 9050 */;
import baseOrderBy from "baseOrderBy" /* 9051 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod9050(arg0, arg1[0], arg1[1])) {
        items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod9050(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});