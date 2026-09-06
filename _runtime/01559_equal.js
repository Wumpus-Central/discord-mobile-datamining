// === Module 1559: equal ===

// Module 1559 (equal)
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
                  let diff = tmp15 - 1;
                  if (0 != +length) {
                    while (equal(source[diff], source2[diff])) {
                      let tmp19 = +diff;
                      diff = tmp19 - 1;
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
                    return source.valueOf() === source2.valueOf();
                  } else {
                    const _Object3 = Object;
                    if (source.toString !== Object.prototype.toString) {
                      return source.toString() === source2.toString();
                    } else {
                      const _Object4 = Object;
                      const keys = Object.keys(source);
                      const _Object5 = Object;
                      if (keys.length !== Object.keys(source2).length) {
                        return false;
                      } else {
                        let diff1 = tmp21 - 1;
                        if (0 != +length2) {
                          while (true) {
                            let _Object = Object;
                            hasOwnProperty = Object.prototype.hasOwnProperty;
                            let call = hasOwnProperty.call;
                            let tmp2 = keys[diff1];
                            if (!(typeof call === "unknown" ? hasOwnProperty(tmp2) : call(source2, tmp2))) {
                              break;
                            } else {
                              let tmp4 = +diff1;
                              diff1 = tmp4 - 1;
                            }
                          }
                          return false;
                        }
                        let diff2 = tmp6 - 1;
                        if (0 != +length2) {
                          while (equal(source[keys[diff2]], source2[keys[diff2]])) {
                            let tmp11 = +diff2;
                            diff2 = tmp11 - 1;
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