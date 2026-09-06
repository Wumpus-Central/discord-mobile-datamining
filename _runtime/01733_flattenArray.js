// === Module 1733: flattenArray ===

// Module 1733 (flattenArray)

export const flattenArray = function flattenArray(style) {
  if (Array.isArray(style)) {
    const items = [];
    function _flattenArray(arg0) {

    }
    const item = style.forEach((arr) => {
      if (Array.isArray(arr)) {
        if (typeof closure_1_1 === "function") {
          let item = arr.forEach((arr) => {
            if (Array.isArray(arr)) {
              if (typeof closure_1_1 === "function") {
                let item = arr.forEach((arr) => {
                  if (Array.isArray(arr)) {
                    if (typeof closure_1_1 === "function") {
                      let item = arr.forEach((arr) => {
                        if (Array.isArray(arr)) {
                          if (typeof closure_1_1 === "function") {
                            let item = arr.forEach(() => { ... });
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          arr = closure_1_0.push(arr);
                        }
                      });
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    arr = closure_1_0.push(arr);
                  }
                });
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              arr = closure_1_0.push(arr);
            }
          });
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        arr = closure_1_0.push(arr);
      }
    });
    return items;
  } else {
    const items1 = [style];
    return items1;
  }
};
export const has = (arg0, fn) => {
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