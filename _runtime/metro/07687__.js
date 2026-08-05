import { baseFlatten } from "../04435_baseFlatten.js";
import { isIterateeCall } from "../07689_isIterateeCall.js";
import { baseOrderBy } from "../07690_baseOrderBy.js";
// _runtime/metro/07687__.js
import baseRest from "baseRest";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (isIterateeCall /* isIterateeCall */(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy /* baseOrderBy */(arg0, baseFlatten /* baseFlatten */(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = isIterateeCall /* isIterateeCall */(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});