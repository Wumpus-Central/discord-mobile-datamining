// _runtime/metro/16837__.js
import _mod8048 from "08048__.js";

export default _mod8048(
  (arg0, arg1, arg2) => {
    let num = 1;
    if (arg2) {
      num = 0;
    }
    arg0[num].push(arg1);
  },
  () => {
    const items = [[], []];
    return items;
  },
);
