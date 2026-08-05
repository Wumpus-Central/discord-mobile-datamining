// _runtime/05702_memoize.js
arg5.default = function memoize(arg0) {
  let closure_0 = arg0;
  return () => {
    const items = [...arguments];
    let flag = true;
    if (items) {
      flag = true;
      if (items.length === items.length) {
        let num2 = 0;
        flag = false;
        if (0 < items.length) {
          flag = true;
          while (items[num2] === items[num2]) {
            let sum = num2 + 1;
            let tmp5 = items;
            num2 = sum;
            flag = false;
            if (sum >= items.length) {
              break;
            }
          }
        }
      }
    }
    if (!flag) {
      flag = undefined === closure_2;
    }
    if (flag) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      closure_2 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_2;
  };
};