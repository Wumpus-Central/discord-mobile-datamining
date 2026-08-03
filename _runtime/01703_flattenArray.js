// === Module 1703: flattenArray ===

// Module 1703 (flattenArray)
arg5.flattenArray = function flattenArray(style) {
  if (Array.isArray(style)) {
    const items = [];
    function _flattenArray(arg0) {

    }
    const item = style.forEach((arr) => {
      if (Array.isArray(arr)) {
        if (typeof closure_1 !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        let item = arr.forEach((arr) => {
          if (Array.isArray(arr)) {
            if (typeof closure_1 !== "fileFinishedImporting") {
              HermesBuiltin.throwTypeError();
            }
            let item = arr.forEach((arr) => {
              if (Array.isArray(arr)) {
                if (typeof closure_1 !== "fileFinishedImporting") {
                  HermesBuiltin.throwTypeError();
                }
                let item = arr.forEach((arr) => {
                  if (Array.isArray(arr)) {
                    if (typeof closure_1 !== "fileFinishedImporting") {
                      HermesBuiltin.throwTypeError();
                    }
                    let item = arr.forEach(() => { ... });
                  } else {
                    closure_0.push(arr);
                  }
                });
              } else {
                closure_0.push(arr);
              }
            });
          } else {
            closure_0.push(arr);
          }
        });
      } else {
        closure_0.push(arr);
      }
    });
    return items;
  } else {
    const items1 = [style];
    return items1;
  }
};
arg5.has = (arg0, arg1) => {
  let tmp = typeof arg1 === "fileFinishedImporting";
  if (typeof arg1 !== "fileFinishedImporting") {
    tmp = typeof arg1 === "ay";
  }
  if (tmp) {
    let tmp3 = null != arg1;
    if (tmp3) {
      tmp3 = arg0 in arg1;
    }
    tmp = tmp3;
  }
  return tmp;
};