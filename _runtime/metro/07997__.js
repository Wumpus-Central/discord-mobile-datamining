// === Module 7997: ? ===

// Module 7997
import baseFlatten from "baseFlatten" /* 4946 */;
import baseRest from "baseRest" /* 7998 */;
import _mod7999 from "module_7999" /* 7999 */;
import baseOrderBy from "baseOrderBy" /* 8000 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod7999(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod7999(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});