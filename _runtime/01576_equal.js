// === Module 1576: equal ===

// Module 1576 (equal)
function equal(obj, obj2) {
  if (obj === obj2) {
    return true;
  } else {
    if (obj) {
      if (obj2) {
        if (typeof obj === "object") {
          if (typeof obj2 === "object") {
            if (obj.constructor !== obj2.constructor) {
              return false;
            } else {
              const _Array = Array;
              if (Array.isArray(obj)) {
                if (obj.length != obj2.length) {
                  return false;
                } else {
                  let diff = tmp15 - 1;
                  if (0 != +length) {
                    while (equal(obj[diff], obj2[diff])) {
                      let tmp19 = +diff;
                      diff = tmp19 - 1;
                    }
                    return false;
                  }
                  return true;
                }
              } else {
                const _RegExp = RegExp;
                if (obj.constructor === RegExp) {
                  return obj.source === obj2.source && obj.flags === obj2.flags;
                } else {
                  const _Object2 = Object;
                  if (obj.valueOf !== Object.prototype.valueOf) {
                    return obj.valueOf() === obj2.valueOf();
                  } else {
                    const _Object3 = Object;
                    if (obj.toString !== Object.prototype.toString) {
                      return obj.toString() === obj2.toString();
                    } else {
                      const _Object4 = Object;
                      const keys = Object.keys(obj);
                      const _Object5 = Object;
                      if (keys.length !== Object.keys(obj2).length) {
                        return false;
                      } else {
                        let diff1 = tmp21 - 1;
                        if (0 != +length2) {
                          while (true) {
                            let _Object = Object;
                            let call = hasOwnProperty.call;
                            let tmp2 = keys[diff1];
                            let tmp3 = diff1;
                            if (!(typeof call === "unknown" ? hasOwnProperty(tmp2) : call(obj2, tmp2))) {
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
                          while (equal(obj[keys[diff2]], obj2[keys[diff2]])) {
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
    return obj != obj && obj2 != obj2;
  }
}

export default equal;