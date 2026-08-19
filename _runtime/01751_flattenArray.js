// _runtime/01751_flattenArray.js
arg5.flattenArray = function flattenArray(style) {
  if (Array.isArray(style)) {
    const items = [];
    function _flattenArray(arg0) {

    }
    const item = style.forEach((item, index) => {
      if (Array.isArray(item)) {
        if (typeof closure_1 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        item = item.forEach((item, index) => {
          if (Array.isArray(item)) {
            if (typeof closure_1 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            item = item.forEach((item, index) => {
              if (Array.isArray(item)) {
                if (typeof closure_1 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                item = item.forEach((item, index) => {
                  if (Array.isArray(item)) {
                    if (typeof closure_1 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    item = item.forEach(() => { ... });
                  } else {
                    arr = arr.push(item);
                  }
                });
              } else {
                arr = arr.push(item);
              }
            });
          } else {
            arr = arr.push(item);
          }
        });
      } else {
        arr = arr.push(item);
      }
    });
    return items;
  } else {
    const items1 = [style];
    return items1;
  }
};
arg5.has = (arg0, fn) => {
  let tmp = typeof fn === "function";
  if (typeof fn !== "function") {
    tmp = typeof fn === "object";
  }
  if (tmp) {
    let tmp3 = null != fn;
    if (tmp3) {
      tmp3 = arg0 in fn;
    }
    tmp = tmp3;
  }
  return tmp;
};