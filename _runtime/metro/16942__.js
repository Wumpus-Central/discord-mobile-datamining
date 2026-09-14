// _runtime/metro/16942__.js
import _mod8550 from "08550__.js";

export default _mod8550(
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
