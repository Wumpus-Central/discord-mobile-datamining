// _runtime/metro/19213__.js
import _mod8087 from "08087__.js";

export default _mod8087(
  (arg0, arg1, arg2) => {
    let num = 1;
    if (arg2) {
      num = 0;
    }
    arg0[num].push(arg1);
  },
  () => {
    items = [[], []];
    return items;
  },
);
