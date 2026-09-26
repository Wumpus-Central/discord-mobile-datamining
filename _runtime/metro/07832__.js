// === Module 7832: ? ===

// Module 7832
import baseFlatten from "baseFlatten" /* 4946 */;
import baseRest from "baseRest" /* 7833 */;
import _mod7834 from "module_7834" /* 7834 */;
import baseOrderBy from "baseOrderBy" /* 7835 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod7834(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod7834(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});