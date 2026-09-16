// _runtime/metro/08514__.js
import baseFlatten from "../04748_baseFlatten.js";
import baseRest from "../08515_baseRest.js";
import _mod8516 from "08516__.js";
import baseOrderBy from "../08517_baseOrderBy.js";

export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8516(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8516(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
