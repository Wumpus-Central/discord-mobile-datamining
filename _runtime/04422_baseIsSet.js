// _runtime/04422_baseIsSet.js

export default function baseIsSet(arg0) {
  let tmp3 = require("00620_isObjectLike.js") /* isObjectLike */(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == require("metro/00770__.js")(arg0);
  }
  return tmp3;
};