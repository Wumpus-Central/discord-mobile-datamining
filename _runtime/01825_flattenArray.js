// === Module 1825: flattenArray ===

// Module 1825 (flattenArray)

export function flattenArray(style) {
  if (Array.isArray(style)) {
    items = [];
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
                            let item = arr.forEach(/* F122345 */ function() { ... });
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
}
export (arg0, fn) => {
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
}
export function filterStyles(tmp3Result2) {
  const obj = { animatedStyles: null, cssStyle: null };
  items = [];
  if (tmp3Result2) {
    obj.animatedStyles = items;
    let reduced = tmp3Result2.reduce((acc, viewDescriptors) => {
      ({ animatedStyles, cssStyle } = acc);
      viewDescriptors = undefined;
      if (viewDescriptors != null) {
        viewDescriptors = viewDescriptors.viewDescriptors;
      }
      if (viewDescriptors) {
        animatedStyles.push(viewDescriptors);
        let cssStyle2 = cssStyle;
      } else {
        cssStyle2 = {};
        const merged = Object.assign(cssStyle);
        const merged1 = Object.assign(viewDescriptors);
      }
      return { animatedStyles, cssStyle: cssStyle2 };
    }, obj);
  } else {
    obj.animatedStyles = items;
    reduced = obj;
  }
  return reduced;
}