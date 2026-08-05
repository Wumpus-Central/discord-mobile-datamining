// _runtime/04424_baseIsMap.js

export default function baseIsMap(arg0) {
  let tmp3 = require("00620_isObjectLike.js") /* isObjectLike */(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == require("metro/00770__.js")(arg0);
  }
  return tmp3;
};