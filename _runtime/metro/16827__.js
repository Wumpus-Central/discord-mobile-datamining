// _runtime/metro/16827__.js
import _mod8432 from "08432__.js";

export default _mod8432(
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
