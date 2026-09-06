// _runtime/01278_items.js
import _mod1276 from "metro/01276__.js";

let items = [];
let num = 0;
do {
  let tmp = num;
  let str = "";
  if (num < 16) {
    str = "0";
  }
  let str2 = str + require("../discord_app/utils/checkEnv.tsx");
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
function merge(arr, obj, plainObjects) {
  closure_0 = arr;
  closure_1 = obj;
  closure_2 = plainObjects;
  if (obj) {
    if (typeof obj !== "object") {
      if (typeof obj !== "function") {
        if (isArray(arr)) {
          arr.push(obj);
        } else {
          if (arr) {
            if (typeof arr === "object") {
              let tmp11 = plainObjects;
              if (plainObjects) {
                tmp11 = plainObjects.plainObjects || plainObjects.allowPrototypes;
                const tmp10 = plainObjects.plainObjects || plainObjects.allowPrototypes;
              }
              if (tmp11) {
                if (tmp11) {
                  arr[obj] = true;
                }
              } else {
                let call = closure_2.call;
                const _Object2 = Object;
                !(typeof call === "unknown" ? closure_2(obj) : call(prototype, obj));
                const tmp12 = closure_2;
              }
            }
          }
          items = [arr, obj];
          return items;
        }
        return arr;
      }
    }
    if (arr) {
      if (typeof arr === "object") {
        let tmp2 = arr;
        if (tmp) {
          if (typeof arrayToObject !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (plainObjects) {
            if (plainObjects.plainObjects) {
              obj = Object.create(null);
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
          if (tmp16(obj)) {
            const item = obj.forEach((obj) => {
              const call = closure_2.call;
              arr = closure_0;
              if (typeof call === "unknown" ? closure_2(arg1) : call(arr, arg1)) {
                if (arr[arg1]) {
                  if (typeof tmp2 === "object") {
                    if (obj) {
                      if (typeof obj === "object") {
                        arr[arg1] = closure_1_7(tmp2, obj, closure_2);
                      }
                    }
                  }
                }
                arr = arr.push(obj);
              } else {
                arr[arg1] = obj;
              }
            });
            let reduced = arr;
          }
          return reduced;
        }
        const _Object = Object;
        const keys = Object.keys(obj);
        reduced = keys.reduce((arg0, arg1) => {
          const call = closure_2.call;
          if (typeof call === "unknown" ? closure_2(arg1) : call(arg0, arg1)) {
            arg0[arg1] = closure_1_7(arg0[arg1], tmp, closure_2);
          } else {
            arg0[arg1] = tmp;
          }
          return arg0;
        }, tmp2);
        tmp = isArray(arr) && !isArray(obj);
      }
    }
    const items1 = [arr];
    return items1.concat(obj);
  } else {
    return arr;
  }
}

export default {
  arrayToObject,
  assign: function assignSingleSource(arg0, arg1) {
    closure_0 = arg1;
    const keys = Object.keys(arg1);
    return keys.reduce((arg0, arg1) => {
      arg0[arg1] = table[arg1];
      return arg0;
    }, arg0);
  },
  combine(arg0, arg1) {
    items = [];
    return items.concat(arg0, arg1);
  },
  compact(o) {
    let obj = { o };
    items = [{ obj, prop: "o" }];
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
        let tmp6 = typeof tmp5 === "object";
        let tmp7 = num2;
        if (typeof tmp5 === "object") {
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
  encode(str) {
    if (0 === str.length) {
      return str;
    } else if (typeof str === "symbol") {
      const _Symbol = Symbol;
      const call = toString.call;
      typeof call === "unknown" ? toString() : call(str);
    } else {
      let StringResult = str;
      if (typeof str !== "string") {
        const _String = String;
        StringResult = String(str);
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
            items = [];
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
                              if (arg4 !== _mod1276.RFC1738) {
                                if (charCodeAtResult < 128) {
                                  let tmp14 = items;
                                  items[items.length] = items[charCodeAtResult];
                                  let sum = num;
                                } else if (charCodeAtResult < 2048) {
                                  let tmp13 = items;
                                  items[items.length] =
                                    items[192 | (charCodeAtResult >> 6)] + items[128 | (63 & charCodeAtResult)];
                                  sum = num;
                                } else {
                                  if (charCodeAtResult >= 55296) {
                                    if (charCodeAtResult < 57344) {
                                      sum = num + 1;
                                      let tmp18 = 1023 & charCodeAtResult;
                                      let sum1 = 65536 + ((tmp18 << 10) | (1023 & substr.charCodeAt(sum)));
                                      let tmp20 = items;
                                      items[items.length] =
                                        items[240 | (sum1 >> 18)] +
                                        items[128 | ((sum1 >> 12) & 63)] +
                                        items[128 | ((sum1 >> 6) & 63)] +
                                        items[128 | (63 & sum1)];
                                    }
                                  }
                                  let tmp11 = items;
                                  items[items.length] =
                                    items[224 | (charCodeAtResult >> 12)] +
                                    items[128 | ((charCodeAtResult >> 6) & 63)] +
                                    items[128 | (63 & charCodeAtResult)];
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
  isBuffer(obj) {
    let tmp = !obj;
    if (obj) {
      tmp = typeof obj !== "object";
    }
    let tmp2 = !tmp;
    if (!tmp) {
      let isBufferResult = obj.constructor && obj.constructor.isBuffer;
      if (isBufferResult) {
        const constructor = obj.constructor;
        isBufferResult = constructor.isBuffer(obj);
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
      items = [];
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
  merge,
};
