// === Module 8070: ? ===

// Module 8070
import baseFlatten from "baseFlatten" /* 5007 */;
import baseRest from "baseRest" /* 8071 */;
import _mod8072 from "module_8072" /* 8072 */;
import baseOrderBy from "baseOrderBy" /* 8073 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8072(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8072(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});