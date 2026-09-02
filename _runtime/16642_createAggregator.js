// _runtime/16642_createAggregator.js
import createAggregator from "08718_createAggregator.js";

export default createAggregator(
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
