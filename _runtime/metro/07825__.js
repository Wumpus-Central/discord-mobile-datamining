// === Module 7825: ? ===

// Module 7825
import baseFlatten from "baseFlatten" /* 5924 */;
import baseRest from "baseRest" /* 7826 */;
import _mod7827 from "module_7827" /* 7827 */;
import baseOrderBy from "baseOrderBy" /* 7828 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod7827(arg0, arg1[0], arg1[1])) {
        items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod7827(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});