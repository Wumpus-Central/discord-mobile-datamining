// _runtime/metro/01288__.js
import _mod1286 from "01286__.js";

let hasOwnProperty;

let merge;
let items = [];
let num = 0;
do {
  let tmp = num;
  let str = "";
  let push = items.push;
  if (num < 16) {
    str = "0";
  }
  let str2 = str + num.toString(16);
  let arr = push(`%${str2.toUpperCase()}`);
  num = num + 1;
} while (num < 256);
function arrayToObject(arg0, plainObjects) {
  const tmp = plainObjects;
  if (tmp) {
    let obj;
    let num;
    if (plainObjects.plainObjects) {
      obj = Object.create(null);
    }
    for (let num = 0; num < arg0.length; num = num + 1) {
      if (undefined !== arg0[num]) {
        obj[num] = arg0[num];
      }
    }
    return obj;
  }
  obj = {};
}
let c6 = 1024;
let obj = {
  arrayToObject,
  assign: function assignSingleSource(arg0, arg1) {
    let closure_0 = arg1;
    const keys = Object.keys(arg1);
    return keys.reduce((acc, item) => {
      acc[item] = closure_0[item];
      return acc;
    }, arg0);
  },
  combine(arg0, arg1) {
    items = [];
    return items.concat(arg0, arg1);
  },
  compact(o) {
    let num;
    items = [];
    const obj = { obj: { o }, prop: "o" };
    items[0] = obj;
    const items1 = [];
    for (let num = 0; num < items.length; num = num + 1) {
      let num2;
      let tmp = items[num];
      let tmp2 = tmp.obj[tmp.prop];
      let _Object = Object;
      let keys = Object.keys(tmp2);
      for (let num2 = 0; num2 < keys.length; num2 = num2 + 1) {
        let tmp4 = keys[num2];
        let tmp5 = tmp2[tmp4];
        let tmp6 = typeof tmp5 === "object";
        if (typeof tmp5 === "object") {
          tmp6 = null !== tmp5;
        }
        if (tmp6) {
          tmp6 = -1 === items1.indexOf(tmp5);
        }
        if (tmp6) {
          let obj2 = { obj: tmp2, prop: tmp4 };
          let arr = items.push(obj2);
          let arr2 = items1.push(tmp5);
        }
      }
    }
    if (items.length > 1) {
      do {
        let arr3 = items.pop();
        let arr4 = arr3.obj[arr3.prop];
        if (isArray(arr4)) {
          let num3;
          let items2 = [];
          for (let num3 = 0; num3 < arr4.length; num3 = num3 + 1) {
            if (undefined !== arr4[num3]) {
              let arr5 = items2.push(arr4[num3]);
            }
          }
          arr3.obj[arr3.prop] = items2;
        }
      } while (items.length > 1);
    }
    return o;
  },
  decode(str, arg1, arg2) {
    str = str.replace(/\+/g, " ");
    if ("iso-8859-1" === arg2) {
      const _unescape = unescape;
      return str.replace(/%[0-9a-f]{2}/gi, unescape);
    } else {
      try {
        const _decodeURIComponent = decodeURIComponent;
        return decodeURIComponent(str);
      } catch (err) {
        return str;
      }
    }
  },
  encode(str, arg1, arg2, arg3, arg4) {
    if (0 === str.length) {
      return str;
    } else {
      let callResult;
      if (typeof str === "symbol") {
        const _Symbol = Symbol;
        callResult = toString.call(str);
      } else {
        callResult = str;
        if (typeof str !== "string") {
          const _String = String;
          callResult = String(str);
        }
      }
      if ("iso-8859-1" === arg2) {
        const _escape = escape;
        const str4 = escape(callResult);
        return str4.replace(/%u[0-9a-f]{4}/gi, (arr) => "%26%23" + parseInt(arr.slice(2), 16) + "%3B");
      } else {
        let num2 = 0;
        let str2 = "";
        let str3 = "";
        if (0 < callResult.length) {
          do {
            let substr = callResult;
            if (callResult.length >= c6) {
              substr = callResult.slice(num2, num2 + tmp3);
            }
            items = [];
            let num = 0;
            if (0 < substr.length) {
              while (true) {
                let charCodeAtResult = substr.charCodeAt(num);
                if (45 !== charCodeAtResult) {
                  if (46 !== charCodeAtResult) {
                    if (95 !== charCodeAtResult) {
                      if (126 !== charCodeAtResult) {
                        if (charCodeAtResult < 48) {
                          if (charCodeAtResult < 65) {
                            if (charCodeAtResult < 97) {
                              if (arg4 !== _mod1286.RFC1738) {
                                let sum;
                                if (charCodeAtResult < 128) {
                                  items[items.length] = items[charCodeAtResult];
                                  sum = num;
                                } else if (charCodeAtResult < 2048) {
                                  items[items.length] =
                                    items[192 | (charCodeAtResult >> 6)] + items[128 | (63 & charCodeAtResult)];
                                  sum = num;
                                } else {
                                  if (charCodeAtResult >= 55296) {
                                    if (charCodeAtResult < 57344) {
                                      sum = num + 1;
                                      let tmp17 = 1023 & charCodeAtResult;
                                      let sum1 = 65536 + ((tmp17 << 10) | (1023 & substr.charCodeAt(sum)));
                                      items[items.length] =
                                        items[240 | (sum1 >> 18)] +
                                        items[128 | ((sum1 >> 12) & 63)] +
                                        items[128 | ((sum1 >> 6) & 63)] +
                                        items[128 | (63 & sum1)];
                                    }
                                  }
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
            num2 = num2 + c6;
            str3 = str2;
          } while (num2 < callResult.length);
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
    if (tmp2) {
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
    return "[object RegExp]" === toString.call(arg0);
  },
  maybeMap(parts1, fn) {
    let length;
    if (isArray(parts1)) {
      items = [];
      let num = 0;
      if (0 < parts1.length) {
        do {
          let arr = items.push(fn(parts1[num]));
          num = num + 1;
          length = parts1.length;
        } while (num < length);
      }
      return items;
    } else {
      return fn(parts1);
    }
  },
  merge,
};
merge = function merge(arr, obj, plainObjects) {
  let closure_0 = arr;
  let closure_1 = obj;
  hasOwnProperty = plainObjects;
  if (obj) {
    if (typeof obj !== "object") {
      if (typeof obj !== "function") {
        if (isArray(arr)) {
          arr = arr.push(obj);
        } else {
          if (arr) {
            if (typeof arr === "object") {
              let tmp11 = plainObjects;
              if (tmp11) {
                tmp11 = plainObjects.plainObjects || plainObjects.allowPrototypes;
              }
              if (!tmp11) {
                const _Object2 = Object;
                tmp11 = !hasOwnProperty.call(Object.prototype, obj);
              }
              if (tmp11) {
                arr[obj] = true;
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
        const tmp = isArray(arr) && !isArray(obj);
        if (tmp) {
          if (typeof arrayToObject === "function") {
            if (plainObjects) {
              if (plainObjects.plainObjects) {
                obj = Object.create(null);
              }
              let num = 0;
              tmp2 = obj;
              if (0 < arr.length) {
                do {
                  if (undefined !== arr[num]) {
                    obj[num] = arr[num];
                  }
                  num = num + 1;
                  tmp2 = obj;
                } while (num < arr.length);
              }
            }
            obj = {};
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (isArray(arr)) {
          let reduced;
          if (isArray(obj)) {
            const item = obj.forEach((item, index) => {
              if (hasOwnProperty.call(arr, index)) {
                if (arr[index]) {
                  if (typeof arr[index] === "object") {
                    if (item) {
                      if (typeof item === "object") {
                        arr[index] = merge(arr[index], item, plainObjects);
                      }
                    }
                  }
                }
                arr.push(item);
              } else {
                arr[index] = item;
              }
            });
            reduced = arr;
          }
          return reduced;
        }
        const _Object = Object;
        const keys = Object.keys(obj);
        reduced = keys.reduce((acc, item) => {
          if (hasOwnProperty.call(acc, item)) {
            acc[item] = merge(acc[item], obj[item], plainObjects);
          } else {
            acc[item] = obj[item];
          }
          return acc;
        }, tmp2);
      }
    }
    const items1 = [arr];
    return items1.concat(obj);
  } else {
    return arr;
  }
};

export default obj;
