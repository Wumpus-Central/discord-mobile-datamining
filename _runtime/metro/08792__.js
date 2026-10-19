// === Module 8792: ? ===

// Module 8792
import baseFlatten from "baseFlatten" /* 5756 */;
import baseRest from "baseRest" /* 8793 */;
import _mod8794 from "module_8794" /* 8794 */;
import baseOrderBy from "baseOrderBy" /* 8795 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8794(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8794(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});