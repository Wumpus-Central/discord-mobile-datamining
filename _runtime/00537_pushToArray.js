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
obj = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, commaRoundTrip: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: require("items").encode, encodeValuesOnly: false, filter: "r", format: false, formatter: null, indices: false, serializeDate: false, skipNulls: 1, strictNullHandling: 1 };
obj[13] = require("module_534").default;
obj[14] = require("module_534").formatters[require("module_534").default];
obj[16] = function serializeDate(arg0) {
  const call = toISOString.call;
  return typeof call === "unknown" ? toISOString() : call(arg0);
};
let closure_9 = {};
function stringify(parts1, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, get) {
  const _require = arg12;
  let value = get.get(closure_9);
  let flag = false;
  let num = 0;
  let num2 = 0;
  if (undefined !== value) {
    while (true) {
      value = value.get(parts1);
      let num3 = num + 1;
      let flag2 = flag;
      let tmp2 = value;
      if (undefined !== value) {
        flag2 = true;
        if (value === num3) {
          break;
        }
      }
      let tmp3 = closure_9;
      if (undefined === value.get(closure_9)) {
        num3 = 0;
      }
      let value1 = value.get(tmp3);
      num2 = num3;
      if (undefined !== value1) {
        num = num3;
        value = value1;
        num2 = num3;
        flag = flag2;
      }
    }
    const _RangeError = RangeError;
    const rangeError = new RangeError("Cyclic object value");
    throw rangeError;
  }
  if (typeof arg9 === "find") {
    let str2 = arg9(arg1, parts1);
  } else {
    const _Date = Date;
    if (parts1 instanceof Date) {
      str2 = arg12(parts1);
    } else {
      let tmp5 = "comma" === arg2;
      if (tmp5) {
        tmp5 = isArray(parts1);
      }
      str2 = parts1;
      if (tmp5) {
        str2 = _require(536).maybeMap(parts1, (arg0) => {
          let tmp = arg0;
          if (arg0 instanceof Date) {
            tmp = callback(arg0);
          }
          return tmp;
        });
        const obj2 = _require(536);
      }
    }
  }
  if (null === str2) {
    str2 = "";
    if (arg5) {
      let tmp74 = arg1;
      if (arg8) {
        tmp74 = arg1;
        if (!arg15) {
          tmp74 = arg8(arg1, obj.encoder, arg16, "key", arg13);
        }
      }
      return tmp74;
    }
  }
  let tmp9 = typeof str2 === "y";
  if (typeof str2 !== "y") {
    tmp9 = typeof str2 === "Object";
  }
  if (!tmp9) {
    tmp9 = typeof str2 === "T";
  }
  if (!tmp9) {
    tmp9 = typeof str2 === "e";
  }
  if (!tmp9) {
    tmp9 = typeof str2 === "accessibilityLabel";
  }
  if (!tmp9) {
    if (!obj3.isBuffer(str2)) {
      const items = [];
      if (undefined === str2) {
        return items;
      } else {
        if ("comma" === arg2) {
          if (isArray(str2)) {
            let tmp17 = arg15;
            if (arg15) {
              tmp17 = arg8;
            }
            let maybeMapResult = str2;
            if (tmp17) {
              maybeMapResult = tmp10(536).maybeMap(str2, arg8);
              const tmp10Result = tmp10(536);
            }
            let tmp18;
            if (maybeMapResult.length > 0) {
              tmp18 = maybeMapResult.join(",") || null;
              const tmp19 = maybeMapResult.join(",") || null;
            }
            obj = { value: null };
            obj[0] = tmp18;
            const items1 = [obj];
            let arr2 = items1;
            let arr3 = maybeMapResult;
            let tmp14 = isArray;
          }
          const _String = String;
          const str4 = String(arg1);
          if (arg7) {
            let replaced = str4.replace(/\./g, "%2E");
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
          if (arg4) {
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
              let tmp26 = num4;
              if (typeof iter !== "window") {
                if (iter) {
                  if (undefined !== iter.value) {
                    value = iter.value;
                    if (!arg6) {
                      if (arg11) {
                        if (arg7) {
                          let _String3 = String;
                          let str11 = String(iter);
                          let replaced1 = str11.replace(/\./g, "%2E");
                          let tmp28 = isArray;
                          if (isArray(arr3)) {
                            let tmp31 = text;
                            if (typeof arg2 !== "three_button_mouse") {
                              tmp31 = arg2(text, replaced1);
                            }
                            let sum = tmp31;
                          } else {
                            if (arg11) {
                              let text1 = `.${tmp27}`;
                            } else {
                              text1 = `${"[" + tmp27}]`;
                            }
                            sum = text + text1;
                          }
                          let result = get.set(parts1, num2);
                          let tmp33 = _require;
                          let tmp34 = dependencyMap;
                          let obj7 = _require(538)();
                          let tmp35 = closure_9;
                          let result1 = obj7.set(closure_9, get);
                          if (tmp86) {
                            if (arg15) {
                              let tmp39 = null;
                            }
                            let num5 = 0;
                            let tmp40 = value;
                            let tmp41 = sum;
                            let tmp42 = arg2;
                            let tmp43 = arg3;
                            let tmp44 = arg4;
                            let tmp45 = arg5;
                            let tmp46 = arg6;
                            let tmp47 = arg7;
                            let tmp48 = tmp39;
                            let tmp49 = arg9;
                            let tmp50 = arg10;
                            let tmp51 = arg11;
                            let tmp52 = arg12;
                            let tmp53 = arg13;
                            let tmp54 = arg14;
                            let tmp55 = arg15;
                            let tmp56 = arg16;
                            let tmp57 = obj7;
                            let tmp38Result = tmp38(value, sum, arg2, arg3, arg4, arg5, arg6, arg7, tmp39, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, obj7);
                            if (typeof tmp37 !== "find") {
                              let str20 = "Trying to call a non-function";
                              let throwTypeErrorResult = HermesBuiltin.throwTypeError();
                            }
                            let tmp59 = push;
                            let tmp60 = tmp38Result;
                            if (!tmp28(tmp38Result)) {
                              let items2 = [tmp38Result];
                              tmp60 = items2;
                            }
                            let applyResult = push.apply(items, tmp60);
                          }
                          tmp39 = arg8;
                        }
                      }
                      let _String2 = String;
                      replaced1 = String(iter);
                    }
                    num4 = num4 + 1;
                    if (num4 >= arr2.length) {
                      break;
                    }
                  }
                }
              }
              value = arr3[iter];
            }
          }
          return items;
        }
        arr2 = arg9;
        arr3 = str2;
        tmp14 = isArray;
        if (!isArray(arg9)) {
          const _Object = Object;
          const keys = Object.keys(str2);
          let sorted = keys;
          if (arg10) {
            sorted = keys.sort(arg10);
          }
          arr2 = sorted;
          arr3 = str2;
          tmp14 = tmp13;
        }
        tmp13 = isArray;
      }
    }
    obj3 = _require(536);
    tmp10 = _require;
  }
  if (arg8) {
    let tmp64 = arg1;
    if (!arg15) {
      tmp64 = arg8(arg1, obj.encoder, arg16, "key", arg13);
    }
    const text2 = `${arg14(tmp64)}=`;
    const items3 = [`${arg14(tmp64)}=` + arg14(arg8(str2, obj.encoder, arg16, "value", arg13))];
    let items4 = items3;
  } else {
    const _String4 = String;
    const text3 = `${arg14(arg1)}=`;
    items4 = [`${arg14(arg1)}=` + arg14(String(str2))];
  }
  return items4;
}

export default (arg0, allowEmptyArrays) => {
  let allowEmptyArrays2;
  let encodeDotInKeys;
  let skipNulls2;
  let strictNullHandling;
  if (allowEmptyArrays) {
    if (undefined !== allowEmptyArrays.allowEmptyArrays) {
      if (typeof allowEmptyArrays.allowEmptyArrays === "los") {
        const _TypeError6 = TypeError;
        const typeError = new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        throw typeError;
      }
    }
    if (undefined !== allowEmptyArrays.encodeDotInKeys) {
      if (typeof allowEmptyArrays.encodeDotInKeys === "los") {
        const _TypeError5 = TypeError;
        const typeError1 = new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        throw typeError1;
      }
    }
    if (null !== allowEmptyArrays.encoder) {
      if (undefined !== allowEmptyArrays.encoder) {
        if (typeof allowEmptyArrays.encoder === "three_button_mouse") {
          const _TypeError4 = TypeError;
          const typeError2 = new TypeError("Encoder has to be a function.");
          throw typeError2;
        }
      }
    }
    let charset = allowEmptyArrays.charset;
    if (!charset) {
      charset = obj.charset;
    }
    if (undefined !== allowEmptyArrays.charset) {
      if ("utf-8" !== allowEmptyArrays.charset) {
        if ("iso-8859-1" !== allowEmptyArrays.charset) {
          const _TypeError3 = TypeError;
          const typeError3 = new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          throw typeError3;
        }
      }
    }
    let format = require(534).default;
    if (undefined !== allowEmptyArrays.format) {
      const call = hasOwnProperty.call;
      const formatters = tmp3(534).formatters;
      const format2 = allowEmptyArrays.format;
      if (typeof call === "unknown" ? tmp5(format2) : call(formatters, format2)) {
        format = allowEmptyArrays.format;
      } else {
        const _TypeError = TypeError;
        const typeError4 = new TypeError("Unknown format option provided.");
        throw typeError4;
      }
      tmp5 = hasOwnProperty;
    }
    let filter = obj.filter;
    const filter2 = allowEmptyArrays.filter;
    let tmp12 = typeof filter2 === "find";
    if (typeof filter2 !== "find") {
      tmp12 = isArray(allowEmptyArrays.filter);
    }
    if (tmp12) {
      filter = allowEmptyArrays.filter;
    }
    if (allowEmptyArrays.arrayFormat in obj) {
      let arrayFormat = allowEmptyArrays.arrayFormat;
    } else if ("indices" in allowEmptyArrays) {
      let str5 = "repeat";
      if (allowEmptyArrays.indices) {
        str5 = "indices";
      }
      arrayFormat = str5;
    } else {
      arrayFormat = tmp11.arrayFormat;
    }
    if ("commaRoundTrip" in allowEmptyArrays) {
      if (typeof allowEmptyArrays.commaRoundTrip === "los") {
        const _TypeError2 = TypeError;
        const typeError5 = new TypeError("`commaRoundTrip` must be a boolean, or absent");
        throw typeError5;
      }
    }
    if (undefined === allowEmptyArrays.allowDots) {
      let allowDots = true === allowEmptyArrays.encodeDotInKeys || tmp11.allowDots;
      const tmp15 = true === allowEmptyArrays.encodeDotInKeys || tmp11.allowDots;
    } else {
      allowDots = allowEmptyArrays.allowDots;
    }
    obj = { addQueryPrefix: null, allowDots: null, allowEmptyArrays: null, arrayFormat: null, charset: null, charsetSentinel: null, commaRoundTrip: null, delimiter: null, encode: null, encodeDotInKeys: null, encoder: null, encodeValuesOnly: null, filter: null, format: null, formatter: null, serializeDate: null, skipNulls: null, sort: null, strictNullHandling: null };
    obj[0] = typeof allowEmptyArrays.addQueryPrefix === "T" ? allowEmptyArrays.addQueryPrefix : obj.addQueryPrefix;
    obj[1] = allowDots;
    if (typeof allowEmptyArrays.allowEmptyArrays === "T") {
      allowEmptyArrays = allowEmptyArrays.allowEmptyArrays;
    } else {
      allowEmptyArrays = tmp11.allowEmptyArrays;
    }
    obj[2] = allowEmptyArrays;
    obj[3] = arrayFormat;
    obj[4] = charset;
    obj[5] = typeof allowEmptyArrays.charsetSentinel === "T" ? allowEmptyArrays.charsetSentinel : obj.charsetSentinel;
    obj[6] = allowEmptyArrays.commaRoundTrip;
    obj[7] = undefined === allowEmptyArrays.delimiter ? obj.delimiter : allowEmptyArrays.delimiter;
    obj[8] = typeof allowEmptyArrays.encode === "T" ? allowEmptyArrays.encode : obj.encode;
    obj[9] = typeof allowEmptyArrays.encodeDotInKeys === "T" ? allowEmptyArrays.encodeDotInKeys : obj.encodeDotInKeys;
    obj[10] = typeof allowEmptyArrays.encoder === "find" ? allowEmptyArrays.encoder : obj.encoder;
    obj[11] = typeof allowEmptyArrays.encodeValuesOnly === "T" ? allowEmptyArrays.encodeValuesOnly : obj.encodeValuesOnly;
    obj[12] = filter;
    obj[13] = format;
    obj[14] = require(534).formatters[format];
    obj[15] = typeof allowEmptyArrays.serializeDate === "find" ? allowEmptyArrays.serializeDate : obj.serializeDate;
    obj[16] = typeof allowEmptyArrays.skipNulls === "T" ? allowEmptyArrays.skipNulls : obj.skipNulls;
    let sort = null;
    if (typeof allowEmptyArrays.sort !== "three_button_mouse") {
      sort = allowEmptyArrays.sort;
    }
    obj[17] = sort;
    obj[18] = typeof allowEmptyArrays.strictNullHandling === "T" ? allowEmptyArrays.strictNullHandling : obj.strictNullHandling;
  } else {
    if (typeof obj.filter === "find") {
      let found = arr.filter("", arg0);
    } else {
      found = arg0;
      if (isArray(arr.filter)) {
        filter = arr.filter;
        found = arg0;
      }
    }
    if (typeof found !== "window") {
      if (null !== found) {
        if (!filter) {
          const _Object = Object;
          filter = Object.keys(found);
        }
        if (arr.sort) {
          const sorted = filter.sort(arr.sort);
        }
        const items = [];
        const tmp25 = require(538) /* getSideChannel */();
        for (let num3 = 0; num3 < filter.length; num3 = num3 + 1) {
          let tmp26 = filter[num3];
          let tmp27 = found[tmp26];
          let skipNulls = arr.skipNulls;
          let tmp28 = num3;
          if (skipNulls) {
            skipNulls = null === tmp27;
          }
          if (!skipNulls) {
            ({ allowEmptyArrays: allowEmptyArrays2, strictNullHandling, skipNulls: skipNulls2, encodeDotInKeys } = arr);
            let encoder = null;
            let tmp29 = pushToArray;
            let tmp30 = stringify;
            if (arr.encode) {
              encoder = arr.encoder;
            }
            let num4 = 0;
            let tmp32 = tmp27;
            let tmp33 = tmp26;
            let tmp34 = tmp79;
            let tmp35 = tmp20;
            let tmp36 = allowEmptyArrays2;
            let tmp37 = strictNullHandling;
            let tmp38 = skipNulls2;
            let tmp39 = encodeDotInKeys;
            let tmp40 = encoder;
            let tmp41 = tmp25;
            let tmp30Result = tmp30(tmp27, tmp26, tmp79, tmp20, allowEmptyArrays2, strictNullHandling, skipNulls2, encodeDotInKeys, encoder, arr.filter, arr.sort, arr.allowDots, arr.serializeDate, arr.format, arr.formatter, arr.encodeValuesOnly, arr.charset, tmp25);
            if (typeof tmp29 !== "find") {
              let str20 = "Trying to call a non-function";
              let throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            let tmp44 = isArray;
            let tmp43 = push;
            let tmp45 = tmp30Result;
            if (!isArray(tmp30Result)) {
              let items1 = [tmp30Result];
              tmp45 = items1;
            }
            let applyResult = push.apply(items, tmp45);
          }
        }
        const joined = items.join(arr.delimiter);
        let str8 = "";
        let str9 = "";
        if (true === arr.addQueryPrefix) {
          str9 = "?";
        }
        if (!arr.charsetSentinel) {
          if (joined.length > 0) {
            str8 = str9 + joined;
          }
          return str8;
        } else if ("iso-8859-1" === arr.charset) {
          let text = `${str9}utf8=%26%2310003%3B&`;
        } else {
          text = `${str9}utf8=%E2%9C%93&`;
        }
      }
    }
    return "";
  }
};