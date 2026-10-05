// === Module 1566: equal ===

// Module 1566 (equal)
let hasOwnProperty;

function equal(source, source2) {
  if (source === source2) {
    return true;
  } else {
    if (source) {
      if (source2) {
        if (typeof source === "object") {
          if (typeof source2 === "object") {
            if (source.constructor !== source2.constructor) {
              return false;
            } else {
              const _Array = Array;
              if (Array.isArray(source)) {
                if (source.length != source2.length) {
                  return false;
                } else {
                  let diff = tmp14 - 1;
                  if (0 != +source.length) {
                    while (equal(source[diff], source2[diff])) {
                      let tmp18 = +diff;
                      diff = tmp18 - 1;
                    }
                    return false;
                  }
                  return true;
                }
              } else {
                const _RegExp = RegExp;
                if (source.constructor === RegExp) {
                  return source.source === source2.source && source.flags === source2.flags;
                } else {
                  const _Object2 = Object;
                  if (source.valueOf !== Object.prototype.valueOf) {
                    const valueOfResult = source.valueOf();
                    return valueOfResult === source2.valueOf();
                  } else {
                    const _Object3 = Object;
                    if (source.toString !== Object.prototype.toString) {
                      const str = source.toString();
                      return str === source2.toString();
                    } else {
                      const _Object4 = Object;
                      const keys = Object.keys(source);
                      const _Object5 = Object;
                      if (keys.length !== Object.keys(source2).length) {
                        return false;
                      } else {
                        let diff1 = tmp20 - 1;
                        if (0 != +keys.length) {
                          while (true) {
                            let _Object = Object;
                            hasOwnProperty = Object.prototype.hasOwnProperty;
                            if (!hasOwnProperty.call(source2, keys[diff1])) {
                              break;
                            } else {
                              let tmp3 = +diff1;
                              diff1 = tmp3 - 1;
                            }
                          }
                          return false;
                        }
                        let diff2 = tmp5 - 1;
                        if (0 != +keys.length) {
                          while (equal(source[keys[diff2]], source2[keys[diff2]])) {
                            let tmp10 = +diff2;
                            diff2 = tmp10 - 1;
                          }
                          return false;
                        }
                        return true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return source != source && source2 != source2;
  }
}

export default equal;