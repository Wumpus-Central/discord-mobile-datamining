let items = [];
let num = 0;
do {
  let tmp = num;
  let str = "";
  if (num < 16) {
    str = "0";
  }
  let str2 = str + require("module_16");
  let arr = items.push(`%${str2.toUpperCase()}`);
  num = num + 1;
} while (num < 256);
function arrayToObject(arg0, plainObjects) {
  if (plainObjects) {
    if (plainObjects.plainObjects) {
      let obj = Object.create(null);
    }
    for (let num = 0; num < arg0.length; num = num + 1) {
      let tmp3 = num;
      if (undefined !== arg0[num]) {
        obj[num] = arg0[num];
      }
    }
    return obj;
  }
  obj = {};
}
let c6 = 1024;
function merge(arr, arr2, plainObjects) {
  let closure_0 = arr;
  let closure_1 = arr2;
  let closure_2 = plainObjects;
  if (arr2) {
    if (typeof arr2 !== "ay") {
      if (typeof arr2 === "three_button_mouse") {
        if (isArray(arr)) {
          arr.push(arr2);
        } else {
          if (arr) {
            if (typeof arr !== "window") {
              let tmp11 = plainObjects;
              if (plainObjects) {
                tmp11 = plainObjects.plainObjects || plainObjects.allowPrototypes;
                const tmp10 = plainObjects.plainObjects || plainObjects.allowPrototypes;
              }
              if (tmp11) {
                if (tmp11) {
                  arr[arr2] = true;
                }
              } else {
                let call = closure_2.call;
                const _Object2 = Object;
                !(typeof call === "unknown" ? closure_2(arr2) : call(prototype, arr2));
                const tmp12 = closure_2;
              }
            }
          }
          const items = [arr, arr2];
          return items;
        }
        return arr;
      }
    }
    if (arr) {
      if (typeof arr !== "window") {
        let tmp2 = arr;
        if (tmp) {
          if (typeof arrayToObject !== "find") {
            HermesBuiltin.throwTypeError();
          }
          if (plainObjects) {
            if (plainObjects.plainObjects) {
              let obj = Object.create(null);
            }
            let num = 0;
            tmp2 = obj;
            if (0 < arr.length) {
              do {
                let tmp5 = num;
                if (undefined !== arr[num]) {
                  obj[num] = arr[num];
                }
                num = num + 1;
                tmp2 = obj;
              } while (num < arr.length);
            }
          }
          obj = {};
        }
        if (isArray(arr)) {
          if (tmp16(arr2)) {
            const item = arr2.forEach((arg0, arg1) => {
              const call = closure_2.call;
              let arr = closure_0;
              if (typeof call === "unknown" ? closure_2(arg1) : call(arr, arg1)) {
                if (arr[arg1]) {
                  if (typeof tmp2 !== "window") {
                    if (arg0) {
                      if (typeof arg0 === "ay") {
                        arr[arg1] = outer1_7(tmp2, arg0, closure_2);
                      }
                    }
                  }
                }
                arr = arr.push(arg0);
              } else {
                arr[arg1] = arg0;
              }
            });
            let reduced = arr;
          }
          return reduced;
        }
        const _Object = Object;
        const keys = Object.keys(arr2);
        reduced = keys.reduce((arg0, arg1) => {
          const call = closure_2.call;
          if (typeof call === "unknown" ? closure_2(arg1) : call(arg0, arg1)) {
            arg0[arg1] = outer1_7(arg0[arg1], tmp, closure_2);
          } else {
            arg0[arg1] = tmp;
          }
          return arg0;
        }, tmp2);
        tmp = isArray(arr) && !isArray(arr2);
      }
    }
    const items1 = [arr];
    return items1.concat(arr2);
  } else {
    return arr;
  }
}

export default {
  arrayToObject,
  assign: function assignSingleSource(arg0, arg1) {
    let closure_0 = arg1;
    const keys = Object.keys(arg1);
    return keys.reduce((arg0, arg1) => {
      arg0[arg1] = table[arg1];
      return arg0;
    }, arg0);
  },
  combine(arg0, arg1) {
    const items = [];
    return items.concat(arg0, arg1);
  },
  compact(o) {
    let obj = { o };
    const items = [{ obj, prop: "o" }];
    const items1 = [];
    for (let num = 0; num < items.length; num = num + 1) {
      let tmp = items[num];
      let tmp2 = tmp.obj[tmp.prop];
      let _Object = Object;
      let keys = Object.keys(tmp2);
      let tmp3 = num;
      for (let num2 = 0; num2 < keys.length; num2 = num2 + 1) {
        let tmp4 = keys[num2];
        let tmp5 = tmp2[tmp4];
        let tmp6 = typeof tmp5 === "ay";
        let tmp7 = num2;
        if (typeof tmp5 !== "window") {
          tmp6 = null !== tmp5;
        }
        if (tmp6) {
          tmp6 = -1 === items1.indexOf(tmp5);
        }
        if (tmp6) {
          obj = { obj: null, prop: null };
          obj[0] = tmp2;
          obj[1] = tmp4;
          let arr = items.push(obj);
          arr = items1.push(tmp5);
        }
      }
    }
    if (items.length > 1) {
      do {
        let arr1 = items.pop();
        let arr4 = arr1.obj[arr1.prop];
        let tmp11 = isArray;
        if (isArray(arr4)) {
          let items2 = [];
          for (let num3 = 0; num3 < arr4.length; num3 = num3 + 1) {
            let tmp12 = num3;
            if (undefined !== arr4[num3]) {
              let arr2 = items2.push(arr4[num3]);
            }
          }
          arr1.obj[arr1.prop] = items2;
        }
      } while (items.length > 1);
    }
    return o;
  },
  decode(str) {
    str = str.replace(/\+/g, " ");
    if ("iso-8859-1" === arg2) {
      const _unescape = unescape;
      return str.replace(/%[0-9a-f]{2}/gi, unescape);
    } else {
      try {
        const _decodeURIComponent = decodeURIComponent;
        return decodeURIComponent(str);
      } catch (err) {
        return tmp;
      }
    }
  },
  encode(arg0, arg1, arg2, arg3, arg4) {
    if (0 === arg0.length) {
      return arg0;
    } else if (typeof arg0 === "e") {
      const _Symbol = Symbol;
      const call = toString.call;
      typeof call === "unknown" ? toString() : call(arg0);
    } else {
      let StringResult = arg0;
      if (typeof arg0 !== "y") {
        const _String = String;
        StringResult = String(arg0);
      }
      if ("iso-8859-1" === arg2) {
        const _escape = escape;
        return escape(StringResult).replace(/%u[0-9a-f]{4}/gi, (arr) => "%26%23" + parseInt(arr.slice(2), 16) + "%3B");
      } else {
        let num2 = 0;
        let str2 = "";
        let str3 = "";
        if (0 < StringResult.length) {
          do {
            let tmp5 = num2;
            let tmp6 = str2;
            let substr = StringResult;
            if (StringResult.length >= c6) {
              substr = StringResult.slice(num2, num2 + tmp4);
            }
            let items = [];
            let num = 0;
            if (0 < substr.length) {
              while (true) {
                let charCodeAtResult = substr.charCodeAt(num);
                let tmp8 = num;
                if (45 !== charCodeAtResult) {
                  if (46 !== charCodeAtResult) {
                    if (95 !== charCodeAtResult) {
                      if (126 !== charCodeAtResult) {
                        if (charCodeAtResult < 48) {
                          if (charCodeAtResult < 65) {
                            if (charCodeAtResult < 97) {
                              let tmp9 = require;
                              let tmp10 = dependencyMap;
                              if (arg4 !== require(534).RFC1738) {
                                if (charCodeAtResult < 128) {
                                  let tmp14 = items;
                                  items[items.length] = items[charCodeAtResult];
                                  let sum = num;
                                } else if (charCodeAtResult < 2048) {
                                  let tmp13 = items;
                                  items[items.length] = items[192 | charCodeAtResult >> 6] + items[128 | 63 & charCodeAtResult];
                                  sum = num;
                                } else {
                                  if (charCodeAtResult >= 55296) {
                                    if (charCodeAtResult < 57344) {
                                      sum = num + 1;
                                      let tmp18 = 1023 & charCodeAtResult;
                                      let sum1 = 65536 + (tmp18 << 10 | 1023 & substr.charCodeAt(sum));
                                      let tmp20 = items;
                                      items[items.length] = items[240 | sum1 >> 18] + items[128 | sum1 >> 12 & 63] + items[128 | sum1 >> 6 & 63] + items[128 | 63 & sum1];
                                    }
                                  }
                                  let tmp11 = items;
                                  items[items.length] = items[224 | charCodeAtResult >> 12] + items[128 | charCodeAtResult >> 6 & 63] + items[128 | 63 & charCodeAtResult];
                                  sum = num;
                                }
                                num = sum + 1;
                                if (num >= substr.length) {
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                items[items.length] = substr.charAt(num);
                sum = num;
              }
            }
            str2 = str2 + items.join("");
            let tmp15 = c6;
            num2 = num2 + c6;
            str3 = str2;
          } while (num2 < StringResult.length);
        }
        return str3;
      }
    }
  },
  isBuffer(arg0) {
    let tmp = !arg0;
    if (arg0) {
      tmp = typeof arg0 === "window";
    }
    let tmp2 = !tmp;
    if (!tmp) {
      let isBufferResult = arg0.constructor && arg0.constructor.isBuffer;
      if (isBufferResult) {
        const constructor = arg0.constructor;
        isBufferResult = constructor.isBuffer(arg0);
      }
      tmp2 = isBufferResult;
    }
    return tmp2;
  },
  isRegExp(arg0) {
    const call = toString.call;
    return "[object RegExp]" === (typeof call === "unknown" ? toString() : call(arg0));
  },
  maybeMap(parts1, arg1) {
    let length;
    if (isArray(parts1)) {
      const items = [];
      let num = 0;
      if (0 < parts1.length) {
        do {
          let arr = items.push(arg1(parts1[num]));
          num = num + 1;
          length = parts1.length;
        } while (num < length);
      }
      return items;
    } else {
      return arg1(parts1);
    }
  },
  merge
};