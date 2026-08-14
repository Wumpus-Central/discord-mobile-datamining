// _runtime/metro/07830__.js
import baseRest from "baseRest";
import { baseFlatten } from "../04495_baseFlatten.js";
import { isIterateeCall } from "../07832_isIterateeCall.js";
import { baseOrderBy } from "../07833_baseOrderBy.js";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (isIterateeCall(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = isIterateeCall(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});