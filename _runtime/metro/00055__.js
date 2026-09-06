// === Module 55: ? ===

// Module 55
import processColorDefault from "processColor" /* 50 */;

importDefault = arg2;
const dependencyMap = arg6;
function parseLength(arg0) {
  const match = re4.exec(arg0);
  if (match) {
    const _parseFloat = parseFloat;
    const parsed = parseFloat(match[1]);
    if (null != match[2]) {
      let tmp6 = parsed;
    } else {
      tmp6 = null;
    }
    return tmp6;
  } else {
    return null;
  }
}
const re2 = /,(?![^()]*\))/;
const re3 = /\s+(?![^(]*\))/;
const re4 = /^([+-]?\d*\.?\d+)(px)?$/;
const re5 = /\n/g;

export default function processBoxShadow(str) {
  let items = [];
  if (null == str) {
    return items;
  } else {
    let tmp48 = str;
    if (typeof str === "string") {
      tmp48 = (function parseBoxShadowString(str) {
        const items = [];
        const parts = str.split(closure_1_2);
        const mapped = parts.map((item) => item.trim());
        const found = mapped.filter((item) => "" !== item);
        const iter = found[Symbol.iterator]();
        while (iter !== undefined) {
          let obj = { offsetX: 0, offsetY: 0 };
          let tmp2;
          let flag = false;
          let num = 0;
          let parts1 = str.split(closure_1_3);
          for (const item10041 of parts1) {
            let tmp8 = item10041;
            if (null == processColorDefault(item10041)) {
              if ("inset" !== tmp8) {
                if (0 === num) {
                  tmp2 = item10041;
                  num = num + 1;
                } else if (1 === num) {
                  if (flag) {
                    obj2.return();
                    let items1 = [];
                    iter.return();
                    return items1;
                  } else {
                    tmp3 = item10041;
                    num = num + 1;
                  }
                } else if (2 === num) {
                  if (flag) {
                    obj2.return();
                    let items2 = [];
                    iter.return();
                    return items2;
                  } else {
                    obj.blurRadius = tmp8;
                    num = num + 1;
                  }
                } else if (3 === num) {
                  if (flag) {
                    obj2.return();
                    let items3 = [];
                    iter.return();
                    return items3;
                  } else {
                    obj.spreadDistance = tmp8;
                    num = num + 1;
                  }
                } else {
                  obj2.return();
                  let items4 = [];
                  iter.return();
                  return items4;
                }
              } else if (null != obj.inset) {
                obj2.return();
                let items5 = [];
                iter.return();
                return items5;
              } else {
                if (null != tmp2) {
                  flag = true;
                }
                obj.inset = true;
              }
            } else if (null != obj.color) {
              obj2.return();
              let items6 = [];
              iter.return();
              return items6;
            } else {
              if (null != tmp2) {
                flag = true;
              }
              obj.color = tmp8;
            }
            continue;
          }
          if (null != tmp2) {
            if (null != tmp3) {
              obj.offsetX = tmp2;
              obj.offsetY = tmp3;
              let arr = items.push(obj);
              continue;
            }
          }
          let items7 = [];
          iter.return();
          return items7;
        }
        return items;
      })(str.replace(re5, " "));
    }
    let iter = tmp48[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let obj = { offsetX: 0, offsetY: 0 };
      for (const key10025 in nextResult) {
        if ("offsetX" === key10025) {
          if (typeof tmp5.offsetX === "string") {
            let offsetX = parseLength(tmp5.offsetX);
          } else {
            offsetX = tmp5.offsetX;
          }
          if (null == offsetX) {
            let items1 = [];
            iter.return();
            return items1;
          } else {
            obj.offsetX = tmp42;
            continue;
          }
        } else {
          if ("offsetY" === key10025) {
            if (typeof tmp5.offsetY === "string") {
              let offsetY = parseLength(tmp5.offsetY);
            } else {
              offsetY = tmp5.offsetY;
            }
            if (null == offsetY) {
              let items2 = [];
              iter.return();
              return items2;
            } else {
              obj.offsetY = tmp35;
              continue;
            }
          } else {
            if ("spreadDistance" === key10025) {
              if (typeof tmp5.spreadDistance === "string") {
                let spreadDistance = parseLength(tmp5.spreadDistance);
              } else {
                spreadDistance = tmp5.spreadDistance;
              }
              if (null == spreadDistance) {
                let items3 = [];
                iter.return();
                return items3;
              } else {
                obj.spreadDistance = tmp28;
                continue;
              }
            } else {
              if ("blurRadius" === key10025) {
                if (typeof tmp5.blurRadius === "string") {
                  let blurRadius = parseLength(tmp5.blurRadius);
                } else {
                  blurRadius = tmp5.blurRadius;
                }
                let tmp20 = blurRadius;
                if (null != blurRadius) {
                  if (tmp20 >= 0) {
                    obj.blurRadius = tmp20;
                    continue;
                  }
                }
                let items4 = [];
                iter.return();
                return items4;
              } else {
                if ("color" === key10025) {
                  let tmp12 = processColorDefault(tmp5.color);
                  if (null == tmp12) {
                    let items5 = [];
                    iter.return();
                    return items5;
                  } else {
                    obj.color = tmp13;
                    continue;
                  }
                } else {
                  if ("inset" !== key10025) {
                    continue;
                  } else {
                    obj.inset = tmp5.inset;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      let arr = items.push(obj);
      continue;
    }
    return items;
  }
};