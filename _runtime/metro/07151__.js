// === Module 7151: ? ===

// Module 7151
import baseFlatten from "baseFlatten" /* 5616 */;
import baseRest from "baseRest" /* 7152 */;
import _mod7153 from "module_7153" /* 7153 */;
import baseOrderBy from "baseOrderBy" /* 7154 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod7153(arg0, arg1[0], arg1[1])) {
        items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod7153(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});