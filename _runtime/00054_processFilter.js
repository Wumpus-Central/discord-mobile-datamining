// === Module 54: processFilter ===

// Module 54 (processFilter)
import processColorDefault from "processColor" /* 50 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function _getFilterAmount(arg0, match) {
  let NumberResult;
  if (typeof match === "string") {
    re5.lastIndex = 0;
    match = re5.exec(match);
    if (match) {
      const _isNaN = isNaN;
      const _Number = Number;
      if (!isNaN(Number(match[1]))) {
        const _Number2 = Number;
        NumberResult = Number(match[1]);
      }
    }
  } else {
    NumberResult = match;
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
function parseDropShadow(match) {
  let tmp;
  let tmp3;
  let tmp4;
  let tmp5;
  function parseDropShadowString(match) {
    let tmp2;
    let tmp;
    const obj = { offsetX: 0, offsetY: 0 };
    let num = 0;
    let flag = false;
    const parts = match.split(closure_1_6);
    const iter = parts[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (null == processColorDefault(nextResult)) {
        if (0 === num) {
          tmp = nextResult;
          num = num + 1;
        } else if (1 === num) {
          let tmp17 = flag;
          if (tmp17) {
            iter.return();
            return null;
          } else {
            tmp2 = nextResult;
            num = num + 1;
          }
        } else if (2 === num) {
          let tmp13 = flag;
          if (tmp13) {
            iter.return();
            return null;
          } else {
            obj.standardDeviation = tmp5;
            num = num + 1;
          }
        } else {
          iter.return();
          return null;
        }
      } else if (null != obj.color) {
        iter.return();
        return null;
      } else {
        if (null != tmp) {
          flag = true;
        }
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
  }
  let tmp2 = match;
  if (typeof match === "string") {
    let num = 0;
    tmp2 = parseDropShadowString(match);
  }
  let obj = { offsetX: 0, offsetY: 0 };
  let tmp6;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp8 = tmp3;
    let tmp9 = tmp4;
    tmp5 = tmp3;
    tmp6 = tmp4;
    let tmp10 = keys[tmp];
    while (tmp10 !== undefined) {
      if ("offsetX" === tmp10) {
        let offsetX;
        if (typeof tmp2.offsetX === "string") {
          re7.lastIndex = 0;
          match = re7.exec(tmp2.offsetX);
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
          offsetX = NumberResult;
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
          let offsetY;
          if (typeof tmp2.offsetY === "string") {
            re7.lastIndex = 0;
            let match1 = re7.exec(tmp2.offsetY);
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
            offsetY = NumberResult1;
          } else {
            offsetY = tmp2.offsetY;
          }
          tmp3 = offsetY;
          if (null != offsetY) {
            continue;
          } else {
            return null;
          }
        } else {
          if ("standardDeviation" === tmp10) {
            let standardDeviation;
            if (typeof tmp2.standardDeviation === "string") {
              re7.lastIndex = 0;
              let match2 = re7.exec(tmp2.standardDeviation);
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
              standardDeviation = NumberResult2;
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
            let tmp13 = processColorDefault(tmp2.color);
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
  let first;
  let tmp11;
  const items = [];
  if (null == str) {
    return items;
  } else {
    if (typeof str === "string") {
      const replaced = str.replace(re3, " ");
      re4.lastIndex = 0;
      let match = re4.exec(replaced);
      if (match) {
        while (true) {
          let str8 = match[1];
          let formatted = str8.toLowerCase();
          let tmp33 = "drop-shadow" === formatted;
          if (tmp33) {
            let tmp39 = parseDropShadow(match[2]);
            if (null == tmp39) {
              return [];
            } else {
              let obj2 = { dropShadow: tmp39 };
              let arr = items.push(obj2);
            }
          } else {
            let str9 = "dropShadow";
            if (!tmp33) {
              let str10 = "hueRotate";
              if ("hue-rotate" !== formatted) {
                str10 = formatted;
              }
              str9 = str10;
            }
            let tmp36 = _getFilterAmount(str9, match[2]);
            if (null == tmp36) {
              break;
            } else {
              let obj3 = {};
              obj3[str9] = tmp36;
              let arr2 = items.push(obj3);
            }
          }
          match = re4.exec(replaced);
        }
        return [];
      }
    } else {
      const _Array = Array;
      if (Array.isArray(str)) {
        const obj = str[Symbol.iterator]();
        while (obj !== undefined) {
          let _Object = Object;
          [first, tmp11] = Object.entries(tmp5)[0];
          let tmp10 = first;
          if ("dropShadow" === first) {
            let tmp23 = parseDropShadow(tmp11);
            if (null == tmp23) {
              let items1 = [];
              obj.return();
              return items1;
            } else {
              let obj4 = { dropShadow: tmp24 };
              let arr3 = items.push(obj4);
            }
          } else {
            let tmp15 = _getFilterAmount(tmp10, tmp11);
            if (null == tmp15) {
              let items2 = [];
              obj.return();
              return items2;
            } else {
              let obj5 = {};
              obj5[tmp10] = tmp16;
              let arr7 = items.push(obj5);
            }
          }
          continue;
        }
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError(typeof str + " filter is not a string or array");
        throw typeError;
      }
    }
    return items;
  }
};