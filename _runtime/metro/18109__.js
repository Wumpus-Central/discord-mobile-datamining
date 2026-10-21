// _runtime/metro/18109__.js
import _mod7900 from "07900__.js";

export default _mod7900(
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
