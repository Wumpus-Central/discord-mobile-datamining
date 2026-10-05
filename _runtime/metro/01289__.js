// === Module 1289: ? ===

// Module 1289
import _mod1286 from "module_1286" /* 1286 */;
import _mod1288 from "module_1288" /* 1288 */;
import getSideChannel from "getSideChannel" /* 1290 */;

let obj = {
  brackets(arg0) {
    return arg0 + "[]";
  },
  comma: "comma",
  indices(arg0, arg1) {
    return arg0 + "[" + arg1 + "]";
  },
  repeat(arg0) {
    return arg0;
  }
};
function pushToArray(arg0, arg1) {

}
let obj2 = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  commaRoundTrip: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: _mod1288.encode,
  encodeValuesOnly: false,
  filter: "r",
  format: _mod1286.default,
  formatter: _mod1286.formatters[_mod1286.default],
  indices: false,
  serializeDate(arg0) {
    return toISOString.call(arg0);
  },
  skipNulls: 1,
  strictNullHandling: 1
};
let closure_9 = {};
function stringify(parts1, arg1, fn, arg3, arg4, arg5, arg6, arg7, fn2, fn3, arg10, arg11, fn4, arg13, fn5, arg15, arg16, get) {
  let items4;
  let str2;
  let closure_0 = fn4;
  let value4 = get.get(closure_9);
  let flag = false;
  let num = 0;
  let num2 = 0;
  if (undefined !== value4) {
    while (true) {
      let value5 = value4.get(parts1);
      let num3 = num + 1;
      let flag2 = flag;
      if (undefined !== value5) {
        flag2 = true;
        if (value5 === num3) {
          break;
        }
      }
      if (undefined === value4.get(closure_9)) {
        num3 = 0;
      }
      let value6 = value4.get(closure_9);
      num2 = num3;
      if (undefined !== value6) {
        num = num3;
        value4 = value6;
        num2 = num3;
        flag = flag2;
      }
    }
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError = new RangeError("Cyclic object value");
    throw rangeError;
  }
  if (typeof fn3 === "function") {
    str2 = fn3(arg1, parts1);
  } else {
    const _Date = Date;
    if (parts1 instanceof Date) {
      str2 = fn4(parts1);
    } else {
      str2 = parts1;
      const tmp5 = "comma" === fn && isArray(parts1);
      if (tmp5) {
        obj2 = _mod1288;
        str2 = obj2.maybeMap(parts1, (arg0) => {
          let tmp = arg0;
          if (arg0 instanceof Date) {
            tmp = closure_0(arg0);
          }
          return tmp;
        });
      }
    }
  }
  if (null === str2) {
    str2 = "";
    if (arg5) {
      let tmp74 = arg1;
      if (fn2) {
        tmp74 = arg1;
        if (!arg15) {
          tmp74 = fn2(arg1, obj2.encoder, arg16, "key", arg13);
        }
      }
      return tmp74;
    }
  }
  const tmp9 = typeof str2 === "string" || typeof str2 === "number" || typeof str2 === "boolean" || typeof str2 === "symbol" || typeof str2 === "bigint";
  if (!tmp9) {
    const obj3 = _mod1288;
    if (!obj3.isBuffer(str2)) {
      const items = [];
      if (undefined === str2) {
        return items;
      } else {
        let arr2;
        let arr3;
        let tmp14;
        if ("comma" === fn) {
          let replaced;
          if (isArray(str2)) {
            let maybeMapResult = str2;
            const tmp17 = arg15 && fn2;
            if (tmp17) {
              const tmp10Result = _mod1288;
              maybeMapResult = tmp10Result.maybeMap(str2, fn2);
            }
            let tmp18;
            if (maybeMapResult.length > 0) {
              tmp18 = maybeMapResult.join(",") || null;
              maybeMapResult.join(",") || null;
            }
            const items1 = [{ value: tmp18 }];
            arr2 = items1;
            arr3 = maybeMapResult;
            tmp14 = isArray;
            obj = { value: tmp18 };
          }
          const _String = String;
          const str4 = String(arg1);
          if (arg7) {
            replaced = str4.replace(/\./g, "%2E");
          } else {
            replaced = str4;
          }
          let text = replaced;
          if (arg3) {
            text = replaced;
            if (tmp14(arr3)) {
              text = replaced;
              if (1 === arr3.length) {
                text = `${tmp22}[]`;
              }
            }
          }
          const tmp25 = arg4;
          if (tmp25) {
            if (tmp14(arr3)) {
              if (0 === arr3.length) {
                return text + "[]";
              }
            }
          }
          let num4 = 0;
          if (0 < arr2.length) {
            while (true) {
              let iter = arr2[num4];
              if (typeof iter === "object") {
                if (iter) {
                  if (undefined !== iter.value) {
                    let value = iter.value;
                    if (!arg6) {
                      if (arg11) {
                        if (arg7) {
                          let sum;
                          let _String3 = String;
                          let str11 = String(iter);
                          let replaced1 = str11.replace(/\./g, "%2E");
                          if (isArray(arr3)) {
                            let tmp31 = text;
                            if (typeof fn === "function") {
                              tmp31 = fn(text, replaced1);
                            }
                            sum = tmp31;
                          } else {
                            let text1;
                            if (arg11) {
                              text1 = `.${tmp27}`;
                            } else {
                              text1 = `${"[" + tmp27}]`;
                            }
                            sum = text + text1;
                          }
                          let result = get.set(parts1, num2);
                          let obj7 = getSideChannel();
                          let result1 = obj7.set(closure_9, get);
                          if (tmp84) {
                            let tmp39;
                            if (arg15) {
                              tmp39 = null;
                            }
                            let tmp38Result = tmp38(value, sum, fn, arg3, arg4, arg5, arg6, arg7, tmp39, fn3, arg10, arg11, fn4, arg13, fn5, arg15, arg16, obj7);
                            if (typeof tmp37 !== "function") {
                              break;
                            } else {
                              let apply = push.apply;
                              let tmp60 = tmp38Result;
                              if (!isArray(tmp38Result)) {
                                let items2 = [tmp38Result];
                                tmp60 = items2;
                              }
                              let applyResult = apply(items, tmp60);
                            }
                          }
                          tmp39 = fn2;
                        }
                      }
                      let _String2 = String;
                      replaced1 = String(iter);
                    }
                    num4 = num4 + 1;
                  }
                }
              }
              value = arr3[iter];
            }
            throw new TypeError("Trying to call a non-function");
          }
          return items;
        }
        arr2 = fn3;
        arr3 = str2;
        tmp14 = isArray;
        if (!isArray(fn3)) {
          const _Object = Object;
          const keys = Object.keys(str2);
          let sorted = keys;
          if (arg10) {
            sorted = keys.sort(arg10);
          }
          arr2 = sorted;
          arr3 = str2;
          tmp14 = isArray;
        }
      }
    }
  }
  if (fn2) {
    let tmp64 = arg1;
    if (!arg15) {
      tmp64 = fn2(arg1, obj2.encoder, arg16, "key", arg13);
    }
    const text2 = `${fn5(tmp64)}=`;
    const items3 = [`${fn5(tmp64)}=` + fn5(fn2(str2, obj2.encoder, arg16, "value", arg13))];
    items4 = items3;
  } else {
    const _String4 = String;
    const text3 = `${fn5(arg1)}=`;
    items4 = [`${fn5(arg1)}=` + fn5(String(str2))];
  }
  return items4;
}

export default function(arg0, allowEmptyArrays) {
  let allowEmptyArrays2;
  let arr;
  let encodeDotInKeys;
  let filter1;
  let found;
  let skipNulls2;
  let sort;
  let strictNullHandling;
  const tmp = allowEmptyArrays;
  if (tmp) {
    let arrayFormat;
    let allowDots;
    if (undefined !== allowEmptyArrays.allowEmptyArrays) {
      if (typeof allowEmptyArrays.allowEmptyArrays !== "boolean") {
        const _TypeError6 = TypeError;
        const self11 = this;
        const self12 = this;
        const typeError = new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        throw typeError;
      }
    }
    if (undefined !== allowEmptyArrays.encodeDotInKeys) {
      if (typeof allowEmptyArrays.encodeDotInKeys !== "boolean") {
        const _TypeError5 = TypeError;
        const self9 = this;
        const self10 = this;
        const typeError1 = new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        throw typeError1;
      }
    }
    if (null !== allowEmptyArrays.encoder) {
      if (undefined !== allowEmptyArrays.encoder) {
        if (typeof allowEmptyArrays.encoder !== "function") {
          const _TypeError4 = TypeError;
          const self7 = this;
          const self8 = this;
          const typeError2 = new TypeError("Encoder has to be a function.");
          throw typeError2;
        }
      }
    }
    const charset = allowEmptyArrays.charset || obj2.charset;
    if (undefined !== allowEmptyArrays.charset) {
      if ("utf-8" !== allowEmptyArrays.charset) {
        if ("iso-8859-1" !== allowEmptyArrays.charset) {
          const _TypeError3 = TypeError;
          const self5 = this;
          const self6 = this;
          const typeError3 = new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          throw typeError3;
        }
      }
    }
    let format = _mod1286.default;
    if (undefined !== allowEmptyArrays.format) {
      if (hasOwnProperty.call(_mod1286.formatters, allowEmptyArrays.format)) {
        format = allowEmptyArrays.format;
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError4 = new TypeError("Unknown format option provided.");
        throw typeError4;
      }
    }
    let filter = obj2.filter;
    const filter2 = allowEmptyArrays.filter;
    let tmp12 = typeof filter2 === "function";
    const tmp10 = _mod1286.formatters[format];
    if (typeof filter2 !== "function") {
      tmp12 = isArray(allowEmptyArrays.filter);
    }
    if (tmp12) {
      filter = allowEmptyArrays.filter;
    }
    if (allowEmptyArrays.arrayFormat in obj) {
      arrayFormat = allowEmptyArrays.arrayFormat;
    } else if ("indices" in allowEmptyArrays) {
      let str5 = "repeat";
      if (allowEmptyArrays.indices) {
        str5 = "indices";
      }
      arrayFormat = str5;
    } else {
      arrayFormat = obj2.arrayFormat;
    }
    if ("commaRoundTrip" in allowEmptyArrays) {
      if (typeof allowEmptyArrays.commaRoundTrip !== "boolean") {
        const _TypeError2 = TypeError;
        const self3 = this;
        const self4 = this;
        const typeError5 = new TypeError("`commaRoundTrip` must be a boolean, or absent");
        throw typeError5;
      }
    }
    if (undefined === allowEmptyArrays.allowDots) {
      allowDots = true === allowEmptyArrays.encodeDotInKeys || obj2.allowDots;
    } else {
      allowDots = allowEmptyArrays.allowDots;
    }
    obj = { addQueryPrefix: typeof allowEmptyArrays.addQueryPrefix === "boolean" ? allowEmptyArrays.addQueryPrefix : obj2.addQueryPrefix, allowDots, allowEmptyArrays, arrayFormat, charset, charsetSentinel: typeof allowEmptyArrays.charsetSentinel === "boolean" ? allowEmptyArrays.charsetSentinel : obj2.charsetSentinel, commaRoundTrip: allowEmptyArrays.commaRoundTrip, delimiter: undefined === allowEmptyArrays.delimiter ? obj2.delimiter : allowEmptyArrays.delimiter, encode: typeof allowEmptyArrays.encode === "boolean" ? allowEmptyArrays.encode : obj2.encode, encodeDotInKeys: typeof allowEmptyArrays.encodeDotInKeys === "boolean" ? allowEmptyArrays.encodeDotInKeys : obj2.encodeDotInKeys, encoder: typeof allowEmptyArrays.encoder === "function" ? allowEmptyArrays.encoder : obj2.encoder, encodeValuesOnly: typeof allowEmptyArrays.encodeValuesOnly === "boolean" ? allowEmptyArrays.encodeValuesOnly : obj2.encodeValuesOnly, filter, format, formatter: tmp10, serializeDate: typeof allowEmptyArrays.serializeDate === "function" ? allowEmptyArrays.serializeDate : obj2.serializeDate, skipNulls: typeof allowEmptyArrays.skipNulls === "boolean" ? allowEmptyArrays.skipNulls : obj2.skipNulls, sort, strictNullHandling: typeof allowEmptyArrays.strictNullHandling === "boolean" ? allowEmptyArrays.strictNullHandling : obj2.strictNullHandling };
    if (typeof allowEmptyArrays.allowEmptyArrays === "boolean") {
      allowEmptyArrays = allowEmptyArrays.allowEmptyArrays;
    } else {
      allowEmptyArrays = obj2.allowEmptyArrays;
    }
    sort = null;
    if (typeof allowEmptyArrays.sort === "function") {
      sort = allowEmptyArrays.sort;
    }
    arr = obj;
  } else {
    arr = obj2;
  }
  if (typeof arr.filter === "function") {
    found = arr.filter("", arg0);
  } else {
    found = arg0;
    if (isArray(arr.filter)) {
      filter1 = arr.filter;
      found = arg0;
    }
  }
  if (typeof found === "object") {
    if (null !== found) {
      if (!filter1) {
        const _Object = Object;
        filter1 = Object.keys(found);
      }
      if (arr.sort) {
        const sorted = filter1.sort(arr.sort);
      }
      const items = [];
      const tmp23 = getSideChannel();
      let num3 = 0;
      if (0 < filter1.length) {
        while (true) {
          let tmp24 = filter1[num3];
          let tmp25 = found[tmp24];
          let skipNulls = arr.skipNulls;
          if (skipNulls) {
            skipNulls = null === tmp25;
          }
          if (!skipNulls) {
            ({ allowEmptyArrays: allowEmptyArrays2, strictNullHandling, skipNulls: skipNulls2, encodeDotInKeys } = arr);
            let encoder = null;
            if (arr.encode) {
              encoder = arr.encoder;
            }
            let tmp28Result = stringify(tmp25, tmp24, tmp66, tmp18, allowEmptyArrays2, strictNullHandling, skipNulls2, encodeDotInKeys, encoder, arr.filter, arr.sort, arr.allowDots, arr.serializeDate, arr.format, arr.formatter, arr.encodeValuesOnly, arr.charset, tmp23);
            if (typeof pushToArray !== "function") {
              break;
            } else {
              let apply = push.apply;
              let tmp43 = tmp28Result;
              if (!isArray(tmp28Result)) {
                let items1 = [tmp28Result];
                tmp43 = items1;
              }
              let applyResult = apply(items, tmp43);
            }
          }
          num3 = num3 + 1;
        }
        throw new TypeError("Trying to call a non-function");
      }
      const joined = items.join(arr.delimiter);
      let str8 = "";
      let str9 = "";
      if (true === arr.addQueryPrefix) {
        str9 = "?";
      }
      let tmp45 = str9;
      if (arr.charsetSentinel) {
        let text;
        if ("iso-8859-1" === arr.charset) {
          text = `${str9}utf8=%26%2310003%3B&`;
        } else {
          text = `${str9}utf8=%E2%9C%93&`;
        }
        tmp45 = text;
      }
      if (joined.length > 0) {
        str8 = tmp45 + joined;
      }
      return str8;
    }
  }
  return "";
};