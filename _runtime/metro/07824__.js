// === Module 7824: ? ===

// Module 7824
import baseFlatten from "baseFlatten" /* 4939 */;
import baseRest from "baseRest" /* 7825 */;
import _mod7826 from "module_7826" /* 7826 */;
import baseOrderBy from "baseOrderBy" /* 7827 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod7826(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod7826(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});