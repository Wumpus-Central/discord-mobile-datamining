// _runtime/metro/07687__.js
import baseRest from "baseRest";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (require("../07689_isIterateeCall.js") /* isIterateeCall */(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return require("../07690_baseOrderBy.js") /* baseOrderBy */(arg0, require("../04435_baseFlatten.js") /* baseFlatten */(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = require("../07689_isIterateeCall.js") /* isIterateeCall */(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});