// === Module 7669: ? ===

// Module 7669
import baseFlatten from "baseFlatten" /* 6152 */;
import baseRest from "baseRest" /* 7670 */;
import _mod7671 from "module_7671" /* 7671 */;
import baseOrderBy from "baseOrderBy" /* 7672 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod7671(arg0, arg1[0], arg1[1])) {
        items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod7671(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});