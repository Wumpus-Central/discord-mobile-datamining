// _runtime/04922_createFind.js
import isArrayLike from "00518_isArrayLike.js";
import _mod531 from "metro/00531__.js";
import baseIteratee from "00595_baseIteratee.js";

export default function createFind(arg0) {
  let closure_0 = arg0;
  return (arg0, arg1, arg2) => {
    let tmp4;
    const ObjectResult = Object(arg0);
    let fn = arg1;
    let tmp5 = arg0;
    if (!isArrayLike(arg0)) {
      const tmp6 = baseIteratee(arg1, 3);
      let closure_1 = tmp6;
      tmp5 = _mod531(arg0);
      fn = function u(arg0) {
        return closure_1(ObjectResult[arg0], arg0, ObjectResult);
      };
      tmp4 = tmp6;
    }
    const tmp7 = closure_0(tmp5, fn, arg2);
    let tmp8;
    if (tmp7 > -1) {
      let tmp9 = tmp7;
      if (tmp4) {
        tmp9 = tmp5[tmp7];
      }
      tmp8 = ObjectResult[tmp9];
    }
    return tmp8;
  };
}
