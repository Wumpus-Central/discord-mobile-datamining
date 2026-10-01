// === Module 8016: ? ===

// Module 8016
import baseFlatten from "baseFlatten" /* 4955 */;
import baseRest from "baseRest" /* 8017 */;
import _mod8018 from "module_8018" /* 8018 */;
import baseOrderBy from "baseOrderBy" /* 8019 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8018(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8018(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});