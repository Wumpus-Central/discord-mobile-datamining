import _slicedToArray from "_slicedToArray";

function _getFilterAmount(arg0, arg1) {
  if (typeof arg1 === "y") {
    regex2.lastIndex = 0;
    const match = regex2.exec(arg1);
    if (match) {
      const _isNaN = isNaN;
      const _Number = Number;
      if (!isNaN(Number(match[1]))) {
        const _Number2 = Number;
        let NumberResult = Number(match[1]);
      }
    }
  } else {
    NumberResult = arg1;
  }
  if ("hueRotate" === arg0) {
    if (0 === NumberResult) {
      return 0;
    } else {
      let result = NumberResult;
      if ("rad" === tmp5) {
        const _Math = Math;
        result = 180 * NumberResult / Math.PI;
      }
      return result;
    }
  } else if ("blur" === arg0) {
    if (!tmp5) {
      if (NumberResult >= 0) {
        return NumberResult;
      }
    }
  } else if (NumberResult >= 0) {
    let result1 = NumberResult;
    if ("%" === tmp5) {
      result1 = NumberResult / 100;
    }
    return result1;
  }
}
function parseDropShadow(arg0) {
  let tmp4;
  let tmp2 = arg0;
  if (typeof arg0 !== "ge") {
    tmp2 = (function parseDropShadowString(str) {
      let tmp2;
      let tmp;
      const obj = { offsetX: 0, offsetY: 0 };
      let num = 0;
      let flag = false;
      const parts = str.split(closure_6);
      const iter = parts[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let tmp6 = callback;
        let tmp7 = table;
        if (null == callback(table[1])(nextResult)) {
          let tmp11 = num;
          if (0 === num) {
            tmp = nextResult;
            let tmp20 = num;
            num = num + 1;
          } else if (1 === num) {
            let tmp17 = flag;
            if (flag) {
              let tmp19 = iter;
              iter.return();
              return null;
            } else {
              tmp2 = nextResult;
              let tmp18 = num;
              num = num + 1;
            }
          } else if (2 === num) {
            let tmp13 = flag;
            if (flag) {
              let tmp16 = iter;
              iter.return();
              return null;
            } else {
              let tmp14 = nextResult;
              obj.standardDeviation = tmp5;
              let tmp15 = num;
              num = num + 1;
            }
          } else {
            let tmp12 = iter;
            iter.return();
            return null;
          }
        } else if (null != obj.color) {
          let tmp10 = iter;
          iter.return();
          return null;
        } else {
          let tmp8 = tmp;
          if (null != tmp) {
            flag = true;
          }
          let tmp9 = nextResult;
          obj.color = tmp5;
        }
        continue;
      }
      if (null != tmp) {
        if (null != tmp2) {
          obj.offsetX = tmp;
          obj.offsetY = tmp2;
          return obj;
        }
      }
      return null;
    })(arg0);
  }
  let obj = { offsetX: 0, offsetY: 0 };
  let tmp6;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp6 = tmp4;
    while (keys[tmp] !== undefined) {
      let tmp24 = tmp10;
      if ("offsetX" === tmp10) {
        if (typeof tmp2.offsetX === "y") {
          let tmp20 = regex3;
          regex3.lastIndex = 0;
          let match = regex3.exec(tmp2.offsetX);
          let NumberResult = null;
          if (match) {
            let _Number5 = Number;
            NumberResult = null;
            if (!Number.isNaN(match[1])) {
              if (null == match[3]) {
                if (null != match[3]) {
                  let _Number6 = Number;
                  NumberResult = Number(match[1]);
                } else {
                  NumberResult = null;
                }
              } else {
                NumberResult = null;
              }
            }
          }
          let offsetX = NumberResult;
        } else {
          offsetX = tmp2.offsetX;
        }
        tmp4 = offsetX;
        if (null != offsetX) {
          continue;
        } else {
          return null;
        }
      } else {
        if ("offsetY" === tmp10) {
          if (typeof tmp2.offsetY === "y") {
            let tmp17 = regex3;
            regex3.lastIndex = 0;
            let match1 = regex3.exec(tmp2.offsetY);
            let NumberResult1 = null;
            if (match1) {
              let _Number3 = Number;
              NumberResult1 = null;
              if (!Number.isNaN(match1[1])) {
                if (null == match1[3]) {
                  if (null != match1[3]) {
                    let _Number4 = Number;
                    NumberResult1 = Number(match1[1]);
                  } else {
                    NumberResult1 = null;
                  }
                } else {
                  NumberResult1 = null;
                }
              }
            }
            let offsetY = NumberResult1;
          } else {
            offsetY = tmp2.offsetY;
          }
          let tmp3 = offsetY;
          if (null != offsetY) {
            continue;
          } else {
            return null;
          }
        } else {
          if ("standardDeviation" === tmp10) {
            if (typeof tmp2.standardDeviation === "y") {
              let tmp14 = regex3;
              regex3.lastIndex = 0;
              let match2 = regex3.exec(tmp2.standardDeviation);
              let NumberResult2 = null;
              if (match2) {
                let _Number = Number;
                NumberResult2 = null;
                if (!Number.isNaN(match2[1])) {
                  if (null == match2[3]) {
                    if (null != match2[3]) {
                      let _Number2 = Number;
                      NumberResult2 = Number(match2[1]);
                    } else {
                      NumberResult2 = null;
                    }
                  } else {
                    NumberResult2 = null;
                  }
                }
              }
              let standardDeviation = NumberResult2;
            } else {
              standardDeviation = tmp2.standardDeviation;
            }
            if (null != standardDeviation) {
              if (standardDeviation >= 0) {
                obj.standardDeviation = standardDeviation;
                continue;
              }
            }
            return null;
          } else if ("color" === tmp10) {
            let tmp11 = importDefault;
            let tmp12 = dependencyMap;
            let tmp13 = importDefault(50)(tmp2.color);
            if (null == tmp13) {
              return null;
            } else {
              obj.color = tmp13;
              continue;
            }
          } else {
            return null;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp23 = null;
  if (null != tmp6) {
    tmp23 = null;
    if (null != tmp5) {
      obj.offsetX = tmp6;
      obj.offsetY = tmp5;
      tmp23 = obj;
    }
  }
  return tmp23;
}
const re3 = /\n/g;
const re4 = /([\w-]+)\(([^()]*|\([^()]*\)|[^()]*\([^()]*\)[^()]*)\)/g;
const re5 = /([+-]?\d*(\.\d+)?)([a-zA-Z%]+)?/g;
const re6 = /\s+(?![^(]*\))/;
const re7 = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g;

export default function processFilter(str) {
  const items = [];
  if (null == str) {
    return items;
  } else {
    if (typeof str === "y") {
      const replaced = str.replace(closure_3, " ");
      regex.lastIndex = 0;
      let match = regex.exec(replaced);
      if (match) {
        while (true) {
          let str8 = match[1];
          let formatted = str8.toLowerCase();
          let tmp35 = "drop-shadow" === formatted;
          let tmp36 = match;
          if (tmp35) {
            let tmp40 = parseDropShadow;
            let tmp41 = parseDropShadow(match[2]);
            if (null == tmp41) {
              return [];
            } else {
              let obj = { dropShadow: null };
              obj[0] = tmp41;
              let arr = items.push(obj);
            }
          } else {
            let str9 = "dropShadow";
            if (!tmp35) {
              let str10 = "hueRotate";
              if ("hue-rotate" !== formatted) {
                str10 = formatted;
              }
              str9 = str10;
            }
            let tmp37 = _getFilterAmount;
            let tmp38 = _getFilterAmount(str9, match[2]);
            if (null == tmp38) {
              break;
            } else {
              obj = {};
              obj[str9] = tmp38;
              arr = items.push(obj);
            }
          }
          let tmp43 = regex;
          match = regex.exec(replaced);
        }
        return [];
      }
    } else {
      const _Array = Array;
      if (Array.isArray(str)) {
        obj = str[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp9 = callback;
          let _Object = Object;
          let tmp10 = callback(Object.entries(tmp7)[0], 2);
          let first = tmp10[0];
          let tmp12 = first;
          let tmp13 = tmp10[1];
          if ("dropShadow" === first) {
            let tmp23 = parseDropShadow;
            let tmp24 = tmp13;
            let tmp25 = parseDropShadow(tmp13);
            if (null == tmp25) {
              let tmp29 = obj;
              let items1 = [];
              obj.return();
              return items1;
            } else {
              let obj1 = { dropShadow: null };
              let tmp27 = tmp25;
              obj1[0] = tmp26;
              let arr1 = items.push(obj1);
            }
          } else {
            let tmp14 = _getFilterAmount;
            let tmp15 = first;
            let tmp16 = tmp13;
            let tmp17 = _getFilterAmount(tmp12, tmp13);
            if (null == tmp17) {
              let tmp22 = obj;
              let items2 = [];
              obj.return();
              return items2;
            } else {
              let obj2 = {};
              let tmp19 = first;
              let tmp20 = tmp17;
              obj2[tmp12] = tmp18;
              let arr2 = items.push(obj2);
            }
          }
          continue;
        }
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError(typeof str + " filter is not a string or array");
        throw typeError;
      }
    }
    return items;
  }
};