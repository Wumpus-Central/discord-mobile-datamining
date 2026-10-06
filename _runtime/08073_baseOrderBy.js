// _runtime/08073_baseOrderBy.js
import arrayMap from "00639_arrayMap.js";
import compareMultiple from "08076_compareMultiple.js";

let dependencyMap;

export default function baseOrderBy(arg0, arg1, arg2) {
  let closure_1;
  let items;
  let tmp3;
  let tmp4;
  let closure_0 = arg1;
  dependencyMap = arg2;
  let tmp = closure_0;
  if (arg1.length) {
    items = tmp(tmp2[0])(arg1, (arg0) => {
      let fn = arg0;
      closure_0 = arg0;
      if (closure_0(closure_1[1])(arg0)) {
        fn = (arg0) => {
          let first = closure_0;
          const tmp = closure_0(closure_1[2]);
          if (1 === closure_0.length) {
            first = closure_0[0];
          }
          return tmp(arg0, first);
        };
      }
      return fn;
    });
    tmp3 = tmp2;
    tmp4 = tmp;
  } else {
    items = [tmp(dependencyMap[3])];
    tmp3 = tmp2;
    tmp4 = tmp;
  }
  let index = -1;
  const tmp4Result = tmp4(tmp3[0]);
  const tmp4Result2 = tmp4(tmp3[4]);
  closure_0 = tmp4Result(items, tmp4Result2(tmp4(tmp3[5])));
  const tmp7 = tmp4(tmp3[6])(arg0, (value, arg1, arg2) => {
    closure_0 = value;
    const obj = { criteria: arrayMap(closure_0, (fn) => fn(closure_0)), index, value };
    index = index + 1;
    return obj;
  });
  return tmp4(tmp3[7])(tmp7, (arg0, arg1) => compareMultiple(arg0, arg1, closure_1));
}
