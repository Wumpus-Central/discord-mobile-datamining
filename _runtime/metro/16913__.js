// _runtime/metro/16913__.js
import _mod8518 from "08518__.js";

export default _mod8518(
  (arg0, arg1, arg2) => {
    let num = 1;
    if (arg2) {
      num = 0;
    }
    let arr = arg0[num];
    arr = arr.push(arg1);
  },
  () => {
    const items = [[], []];
    return items;
  },
);
