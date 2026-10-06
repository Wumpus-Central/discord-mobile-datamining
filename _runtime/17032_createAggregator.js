// _runtime/17032_createAggregator.js
import createAggregator from "08141_createAggregator.js";

export default createAggregator(
  (arg0, arg1, arg2) => {
    let num = 1;
    const tmp = arg2;
    if (tmp) {
      num = 0;
    }
    const arr = arg0[num];
    arr.push(arg1);
  },
  () => {
    const items = [[], []];
    return items;
  },
);
