// _runtime/04436_isConcatSpreadable.js
let isConcatSpreadable;
if (require("module_608")) {
  isConcatSpreadable = require("module_608").isConcatSpreadable;
}

export default function isFlattenable(arg0) {
  let tmp3 = require("metro/00599__.js")(arg0) || require("00618_baseIsArguments.js") /* baseIsArguments */(arg0);
  if (!tmp3) {
    let tmp5 = isConcatSpreadable;
    if (isConcatSpreadable) {
      tmp5 = arg0;
    }
    if (tmp5) {
      tmp5 = arg0[tmp4];
    }
    tmp3 = tmp5;
    tmp4 = isConcatSpreadable;
  }
  return tmp3;
};