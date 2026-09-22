// _runtime/metro/17307__.js
import _mod8708 from "08708__.js";

export default _mod8708(
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
