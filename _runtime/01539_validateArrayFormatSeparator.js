// === Module 1539: validateArrayFormatSeparator ===

// Module 1539 (validateArrayFormatSeparator)
import _mod1540 from "module_1540" /* 1540 */;
import decodeComponents from "decodeComponents" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import _slicedToArray from "module_32" /* 32 */;

function validateArrayFormatSeparator(arrayFormatSeparator) {
  const typeError = new TypeError("arrayFormatSeparator must be single character string");
  throw typeError;
}
function decode(arg0, decode) {
  let tmp = arg0;
  if (decode.decode) {
    tmp = decodeComponents(arg0);
  }
  return tmp;
}
function keysSorter(arr) {
  closure_0 = arr;
  if (Array.isArray(arr)) {
    let sorted = arr.sort();
  } else {
    sorted = arr;
    if (typeof arr === "object") {
      const _Object = Object;
      const sorted1 = keysSorter(Object.keys(arr)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
      sorted = sorted1.map((item) => keys[item]);
      const obj = keysSorter(Object.keys(arr));
    }
  }
  return sorted;
}
function parseValue(str, parseNumbers) {
  if (parseNumbers.parseNumbers) {
    const _Number = Number;
    const _Number2 = Number;
    if (!Number.isNaN(Number(str))) {
      if (typeof str === "string") {
        if ("" !== str.trim()) {
          const _Number3 = Number;
          let NumberResult = Number(str);
        }
        return NumberResult;
      }
    }
  }
  const parseBooleans = parseNumbers.parseBooleans;
  let tmp3 = !parseBooleans;
  if (parseBooleans) {
    tmp3 = null === str;
  }
  if (!tmp3) {
    let tmp5 = "true" !== str.toLowerCase();
    if (tmp5) {
      tmp5 = "false" !== str.toLowerCase();
    }
    tmp3 = tmp5;
  }
  NumberResult = str;
  if (!tmp3) {
    NumberResult = "true" === str.toLowerCase();
  }
}
function parse(str, arg1) {
  let obj = globalThis;
  let merged = Object.assign({ decode: true, sort: true, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: false, parseBooleans: false }, arg1);
  validateArrayFormatSeparator(merged.arrayFormatSeparator);
  obj = Object.create(null);
  if (typeof str !== "string") {
    return obj;
  } else {
    const str7 = str.trim().replace(/^[?#&]/, "");
    if (str7) {
      let parts = str7.split("&");
      const iter = parts[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let str4 = nextResult;
        if ("" !== nextResult) {
          let tmp45 = obj(1542);
          if (merged.decode) {
            let replaced = str4.replace(/\+/g, " ");
          } else {
            replaced = str4;
          }
          let tmp13 = _slicedToArray(tmp45(replaced, "="), 2);
          [tmp14, tmp15] = tmp13;
          if (undefined === tmp15) {
            let tmp4Result = tmp4(decode(tmp14, merged), null, obj);
          } else {
            let items = ["comma", "separator", "bracket-separator"];
            if (items.includes(merged.arrayFormat)) {
            } else {
              let tmp20 = decode(tmp16, merged);
            }
          }
        }
        continue;
      }
      let _Object = Object;
      let keys = Object.keys(obj);
      for (const item10065 of keys) {
        let tmp30 = obj[item10065];
        let tmp31 = tmp30;
        let tmp29 = item10065;
        if (typeof tmp30 === "object") {
          if (null !== tmp31) {
            let _Object2 = Object;
            let keys1 = Object.keys(tmp31);
            for (const item10081 of keys1) {
              tmp31[item10081] = parseValue(tmp31[item10081], merged);
              continue;
            }
            continue;
          }
        }
        obj[tmp29] = parseValue(tmp31, merged);
      }
      if (false === merged.sort) {
        return obj;
      } else {
        if (true === merged.sort) {
          const _Object4 = obj.Object;
          const keys2 = _Object4.keys(obj);
          let sorted = keys2.sort();
        } else {
          const _Object3 = Object;
          const keys3 = Object.keys(obj);
          sorted = keys3.sort(merged.sort);
        }
        const _Object5 = obj.Object;
        obj = _Object5.create(null);
        const reduced = sorted.reduce((acc, item) => {
          if (Boolean(obj[item])) {
            if (typeof obj === "object") {
              const _Array2 = Array;
              if (!Array.isArray(obj)) {
                let keys = obj;
                const _Array = Array;
                if (Array.isArray(obj)) {
                  let sorted = obj.sort();
                } else {
                  sorted = obj;
                  if (typeof obj === "object") {
                    const _Object = Object;
                    keys = Object.keys(obj);
                    const _Array3 = Array;
                    if (Array.isArray(keys)) {
                      let sorted1 = keys.sort();
                    } else {
                      sorted1 = keys;
                      if (typeof keys === "object") {
                        const _Object2 = Object;
                        const sorted2 = keysSorter(Object.keys(keys)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
                        sorted1 = sorted2.map((item) => keys[item]);
                        const obj3 = keysSorter(Object.keys(keys));
                      }
                    }
                    keys = sorted1.sort((arg0, arg1) => Number(arg0) - Number(arg1));
                    const mapped = keys.map((item) => keys[item]);
                  }
                }
                acc[item] = sorted;
              }
              return acc;
            }
          }
          acc[item] = obj[item];
        }, obj);
      }
    } else {
      return obj;
    }
    const str5 = str.trim();
  }
}
let closure_4 = Symbol("encodeFragmentIdentifier");

export const extract = function extract(arr) {
  const index = arr.indexOf("#");
  let substr = arr;
  if (-1 !== index) {
    substr = arr.slice(0, index);
  }
  const index1 = substr.indexOf("?");
  let str = "";
  if (-1 !== index1) {
    str = substr.slice(index1 + 1);
  }
  return str;
};
export { parse };
export const stringify = (arg0, merged) => {
  dependencyMap = arg0;
  if (arg0) {
    const _Object = Object;
    merged = Object.assign({ encode: true, strict: true, arrayFormat: "none", arrayFormatSeparator: "," }, merged);
    validateArrayFormatSeparator(merged.arrayFormatSeparator);
    function shouldFilter(item10024) {
      let skipNull = merged.skipNull;
      if (skipNull) {
        skipNull = null == dependencyMap[item10024];
      }
      if (!skipNull) {
        let skipEmptyString = merged.skipEmptyString;
        if (skipEmptyString) {
          skipEmptyString = "" === dependencyMap[item10024];
        }
        skipNull = skipEmptyString;
      }
      return skipNull;
    }
    closure_2 = (function encoderForArrayFormat(merged) {
      closure_0 = merged;
      const arrayFormat = merged.arrayFormat;
      if ("index" === arrayFormat) {
        return (arg0) => {
          closure_0 = arg0;
          return (arg0, arg1) => {
            let encode = arg0;
            let length = arg0.length;
            let tmp = arg0;
            if (undefined !== arg1) {
              let items1 = closure_0;
              if (!closure_0.skipNull) {
                if (items1.skipEmptyString) {
                  tmp = encode;
                }
                if (null === arg1) {
                  const items = [];
                  encode = items1.encode;
                  if (!encode) {
                    items1 = [tmp24, "[", length, "]"];
                    length = items1.join("");
                    items[arraySpreadResult] = length;
                    let items2 = items;
                  } else if (items1.strict) {
                    let encodeURIComponentResult = closure_0(1540)(tmp24);
                  } else {
                    const _encodeURIComponent4 = encodeURIComponent;
                    encodeURIComponentResult = encodeURIComponent(tmp24);
                  }
                  arraySpreadResult = HermesBuiltin.arraySpread(encode, 0);
                } else {
                  items2 = [];
                  if (!items1.encode) {
                    const items3 = [tmp35, "[", , , ];
                    if (!items1.encode) {
                      items3[2] = length;
                      items3[3] = "]=";
                      if (!items1.encode) {
                        items3[4] = arg1;
                        items2[tmp34] = items3.join("");
                      } else if (items1.strict) {
                        let encodeURIComponentResult1 = closure_0(1540)(arg1);
                      } else {
                        const _encodeURIComponent3 = encodeURIComponent;
                        encodeURIComponentResult1 = encodeURIComponent(arg1);
                      }
                    } else if (items1.strict) {
                      let encodeURIComponentResult2 = closure_0(1540)(length);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult2 = encodeURIComponent(length);
                    }
                  } else if (items1.strict) {
                    let encodeURIComponentResult3 = closure_0(1540)(tmp35);
                  } else {
                    const _encodeURIComponent = encodeURIComponent;
                    encodeURIComponentResult3 = encodeURIComponent(tmp35);
                  }
                }
              } else {
                tmp = encode;
              }
            }
            return tmp;
          };
        };
      } else if ("bracket" === arrayFormat) {
        return (arg0) => {
          closure_0 = arg0;
          return (arg0, arg1) => {
            let items1 = arg0;
            let tmp = arg0;
            if (undefined !== arg1) {
              if (!closure_0.skipNull) {
                if (tmp25.skipEmptyString) {
                  tmp = items1;
                }
                if (null === arg1) {
                  const items = [];
                  if (!tmp25.encode) {
                    items1 = [tmp18, "[]"];
                    items[tmp17] = items1.join("");
                    let items2 = items;
                  } else if (tmp25.strict) {
                    let encodeURIComponentResult = closure_0(1540)(tmp18);
                  } else {
                    const _encodeURIComponent3 = encodeURIComponent;
                    encodeURIComponentResult = encodeURIComponent(tmp18);
                  }
                } else {
                  items2 = [];
                  if (!tmp25.encode) {
                    const items3 = [tmp30, "[]=", ];
                    if (!tmp25.encode) {
                      items3[2] = arg1;
                      items2[tmp29] = items3.join("");
                    } else if (tmp25.strict) {
                      let encodeURIComponentResult1 = closure_0(1540)(arg1);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(arg1);
                    }
                  } else if (tmp25.strict) {
                    let encodeURIComponentResult2 = closure_0(1540)(tmp30);
                  } else {
                    const _encodeURIComponent = encodeURIComponent;
                    encodeURIComponentResult2 = encodeURIComponent(tmp30);
                  }
                }
              } else {
                tmp = items1;
              }
            }
            return tmp;
          };
        };
      } else if ("colon-list-separator" === arrayFormat) {
        return (arg0) => {
          closure_0 = arg0;
          return (arg0, arg1) => {
            let items1 = arg0;
            let tmp = arg0;
            if (undefined !== arg1) {
              if (!closure_0.skipNull) {
                if (tmp25.skipEmptyString) {
                  tmp = items1;
                }
                if (null === arg1) {
                  const items = [];
                  if (!tmp25.encode) {
                    items1 = [tmp18, ":list="];
                    items[tmp17] = items1.join("");
                    let items2 = items;
                  } else if (tmp25.strict) {
                    let encodeURIComponentResult = closure_0(1540)(tmp18);
                  } else {
                    const _encodeURIComponent3 = encodeURIComponent;
                    encodeURIComponentResult = encodeURIComponent(tmp18);
                  }
                } else {
                  items2 = [];
                  if (!tmp25.encode) {
                    const items3 = [tmp30, ":list=", ];
                    if (!tmp25.encode) {
                      items3[2] = arg1;
                      items2[tmp29] = items3.join("");
                    } else if (tmp25.strict) {
                      let encodeURIComponentResult1 = closure_0(1540)(arg1);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(arg1);
                    }
                  } else if (tmp25.strict) {
                    let encodeURIComponentResult2 = closure_0(1540)(tmp30);
                  } else {
                    const _encodeURIComponent = encodeURIComponent;
                    encodeURIComponentResult2 = encodeURIComponent(tmp30);
                  }
                }
              } else {
                tmp = items1;
              }
            }
            return tmp;
          };
        };
      } else {
        if ("comma" !== arrayFormat) {
          if ("separator" !== arrayFormat) {
            if ("bracket-separator" !== arrayFormat) {
              return (arg0) => {
                closure_0 = arg0;
                return (arg0, arg1) => {
                  let encode = arg0;
                  let tmp = arg0;
                  if (undefined !== arg1) {
                    if (!closure_0.skipNull) {
                      if (tmp26.skipEmptyString) {
                        tmp = encode;
                      }
                      if (null === arg1) {
                        const items = [];
                        encode = tmp26.encode;
                        if (!encode) {
                          items[arraySpreadResult] = tmp18;
                          let items1 = items;
                        } else if (tmp26.strict) {
                          let encodeURIComponentResult = closure_0(1540)(tmp18);
                        } else {
                          const _encodeURIComponent3 = encodeURIComponent;
                          encodeURIComponentResult = encodeURIComponent(tmp18);
                        }
                        arraySpreadResult = HermesBuiltin.arraySpread(encode, 0);
                      } else {
                        items1 = [];
                        if (!tmp26.encode) {
                          const items2 = [tmp30, "=", ];
                          if (!tmp26.encode) {
                            items2[2] = arg1;
                            items1[tmp29] = items2.join("");
                          } else if (tmp26.strict) {
                            let encodeURIComponentResult1 = closure_0(1540)(arg1);
                          } else {
                            const _encodeURIComponent2 = encodeURIComponent;
                            encodeURIComponentResult1 = encodeURIComponent(arg1);
                          }
                        } else if (tmp26.strict) {
                          let encodeURIComponentResult2 = closure_0(1540)(tmp30);
                        } else {
                          const _encodeURIComponent = encodeURIComponent;
                          encodeURIComponentResult2 = encodeURIComponent(tmp30);
                        }
                      }
                    } else {
                      tmp = encode;
                    }
                  }
                  return tmp;
                };
              };
            }
          }
        }
        let str6 = "=";
        if ("bracket-separator" === merged.arrayFormat) {
          str6 = "[]=";
        }
        return (arg0) => {
          closure_0 = arg0;
          return (arg0, arg1) => {
            let tmp = arg0;
            if (undefined !== arg1) {
              if (!closure_0.skipNull) {
                if (tmp25.skipEmptyString) {
                  tmp = arg0;
                }
                let str3 = "";
                if (null !== arg1) {
                  str3 = arg1;
                }
                if (0 === arg0.length) {
                  if (!tmp25.encode) {
                    const items = [tmp10, str6, ];
                    if (!tmp25.encode) {
                      items[2] = str3;
                      const items1 = [items.join("")];
                      let items3 = items1;
                    } else if (tmp25.strict) {
                      let encodeURIComponentResult = closure_0(1540)(str3);
                    } else {
                      const _encodeURIComponent3 = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(str3);
                    }
                  } else if (tmp25.strict) {
                    let encodeURIComponentResult1 = closure_0(1540)(tmp10);
                  } else {
                    const _encodeURIComponent2 = encodeURIComponent;
                    encodeURIComponentResult1 = encodeURIComponent(tmp10);
                  }
                } else {
                  const items2 = [arg0, ];
                  if (!tmp25.encode) {
                    items2[1] = str3;
                    items3 = [items2.join(tmp25.arrayFormatSeparator)];
                  } else if (tmp25.strict) {
                    let encodeURIComponentResult2 = closure_0(1540)(str3);
                  } else {
                    const _encodeURIComponent = encodeURIComponent;
                    encodeURIComponentResult2 = encodeURIComponent(str3);
                  }
                }
              } else {
                tmp = arg0;
              }
            }
            return tmp;
          };
        };
      }
    })(merged);
    const obj = {};
    const _Object2 = Object;
    const keys = Object.keys(arg0);
    for (const item10024 of keys) {
      let tmp8 = item10024;
      if (!shouldFilter(item10024)) {
        obj[tmp8] = arg0[tmp8];
      }
      continue;
    }
    const _Object3 = Object;
    const keys1 = Object.keys(obj);
    if (false !== merged.sort) {
      const sorted = keys1.sort(merged.sort);
    }
    const mapped = keys1.map((item) => {
      if (undefined === dependencyMap[item]) {
        return "";
      } else if (null === arr) {
        if (!merged.encode) {
          let text = item;
        } else if (tmp22.strict) {
          let encodeURIComponentResult = _mod1540(item);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(item);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          if (0 !== arr.length) {
            const reduced = arr.reduce(closure_2(item), []);
            let joined = reduced.join("&");
          }
          if (!tmp13.encode) {
            joined = `${item}[]`;
          } else if (tmp13.strict) {
            let encodeURIComponentResult1 = _mod1540(item);
          } else {
            encodeURIComponentResult1 = `[]`.encodeURIComponent(item);
          }
        } else if (!merged.encode) {
          if (!tmp.encode) {
            text = `${item}=${arr}`;
          } else if (tmp.strict) {
            let encodeURIComponentResult2 = _mod1540(arr);
          } else {
            const _encodeURIComponent2 = encodeURIComponent;
            encodeURIComponentResult2 = encodeURIComponent(arr);
          }
        } else if (tmp.strict) {
          let encodeURIComponentResult3 = _mod1540(item);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          encodeURIComponentResult3 = encodeURIComponent(item);
        }
      }
    });
    const found = mapped.filter((item) => item.length > 0);
    return found.join("&");
  } else {
    return "";
  }
};
export const parseUrl = (arr, arg1) => {
  const merged = Object.assign({ decode: true }, arg1);
  [str, tmp5] = _slicedToArray(_mod1542(arr, "#"), 2);
  const tmp4 = _slicedToArray(_mod1542(arr, "#"), 2);
  const request = { url: str.split("?")[0] || "", query: null };
  const index = arr.indexOf("#");
  let substr = arr;
  if (-1 !== index) {
    substr = arr.slice(0, index);
  }
  const index1 = substr.indexOf("?");
  let str2 = "";
  if (-1 !== index1) {
    str2 = substr.slice(index1 + 1);
  }
  request.query = parse(str2, merged);
  if (merged) {
    if (merged.parseFragmentIdentifier) {
      if (tmp5) {
        let tmp11 = tmp5;
        if (merged.decode) {
          tmp11 = decodeComponents(tmp5);
        }
        const obj = { fragmentIdentifier: tmp11 };
      }
      return Object.assign(request, {});
    }
  }
};
export const stringifyUrl = (url, arg1) => {
  const obj = { encode: true, strict: true };
  obj[closure_4] = true;
  const merged = Object.assign(obj, arg1);
  url = url.url;
  const index = url.indexOf("#");
  if (-1 !== index) {
    const str = url.slice(0, index);
  }
  const json = exports.stringify(Object.assign(exports.parse(exports.extract(url.url), { sort: false }), url.query), merged);
  let combined = json;
  if (json) {
    const _HermesInternal = HermesInternal;
    combined = "?" + json;
  }
  const url1 = url.url;
  const index1 = url1.indexOf("#");
  let str2 = "";
  if (-1 !== index1) {
    str2 = url1.slice(index1);
  }
  if (!url.fragmentIdentifier) {
    const _HermesInternal3 = HermesInternal;
    return "" + tmp4 + combined + str2;
  } else {
    const fragmentIdentifier = url.fragmentIdentifier;
    if (merged[tmp]) {
      if (!merged.encode) {
        let tmp8 = fragmentIdentifier;
      } else if (merged.strict) {
        let encodeURIComponentResult = _mod1540(fragmentIdentifier);
      } else {
        const _encodeURIComponent = encodeURIComponent;
        encodeURIComponentResult = encodeURIComponent(fragmentIdentifier);
      }
    } else {
      tmp8 = fragmentIdentifier;
    }
    const _HermesInternal2 = HermesInternal;
    const combined1 = "#" + tmp8;
  }
};
export const pick = (arg0, arg1, arg2) => {
  const obj = { parseFragmentIdentifier: true };
  obj[closure_4] = false;
  const merged = Object.assign(obj, arg2);
  const parseUrlResult = exports.parseUrl(arg0, merged);
  const request = { url: parseUrlResult.url, query: _mod1543(query, arg1), fragmentIdentifier };
  ({ query, fragmentIdentifier } = parseUrlResult);
  return exports.stringifyUrl(request, merged);
};
export const exclude = (arg0, arg1, arg2) => {
  closure_0 = arg1;
  return exports.pick(arg0, Array.isArray(arg1) ? ((arg0) => !closure_0.includes(arg0)) : ((arg0, arg1) => !closure_0(arg0, arg1)), arg2);
};