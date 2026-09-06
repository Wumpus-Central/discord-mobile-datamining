// _runtime/08387_baseOrderBy.js
import arrayMap from "00628_arrayMap.js";
import compareMultiple from "08390_compareMultiple.js";

export default function baseOrderBy(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  if (arg1.length) {
    let items = tmp(tmp2[0])(arg1, (arg0) => {
      let fn = arg0;
      closure_0 = arg0;
      if (closure_0(closure_1[1])(arg0)) {
        fn = (arg0) => {
          let first = closure_0;
          if (1 === closure_0.length) {
            first = closure_0[0];
          }
          return closure_0(closure_1[2])(arg0, first);
        };
      }
      return fn;
    });
    let tmp3 = tmp2;
    let tmp4 = tmp;
  } else {
    items = [tmp(tmp2[3])];
    tmp3 = tmp2;
    tmp4 = tmp;
  }
  c2 = -1;
  tmp4(tmp3[0]);
  const tmp4Result = tmp4(tmp3[4]);
  closure_0 = tmp4Result(items, tmp4Result(tmp4(tmp3[5])));
  return tmp4(tmp3[7])(
    tmp4(tmp3[6])(arg0, (value, arg1, arg2) => {
      closure_0 = value;
      const obj = { criteria: arrayMap(closure_0, (fn) => fn(closure_0)), index: null, value };
      const sum = c2 + 1;
      c2 = sum;
      obj.index = sum;
      return obj;
    }),
    (arg0, arg1) => compareMultiple(arg0, arg1, closure_1),
  );
}
