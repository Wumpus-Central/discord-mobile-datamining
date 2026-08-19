// _runtime/01556_validateArrayFormatSeparator.js
import _mod1557 from "metro/01557__.js";
import decodeComponents from "01558_decodeComponents.js";
import _mod1559 from "metro/01559__.js";
import _mod1560 from "metro/01560__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

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
      sorted = sorted1.map((item, index) => keys[item]);
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
function parse(str) {
  const merged = Object.assign({ decode: true, sort: true, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: false, parseBooleans: false }, arg1);
  validateArrayFormatSeparator(merged.arrayFormatSeparator);
  let obj = Object.create(null);
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
          let tmp45 = obj(1559);
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
        obj[item10065] = parseValue(tmp31, merged);
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
        const reduced = sorted.reduce((acc, item, index) => {
          if (Boolean(keys[item])) {
            if (typeof obj === "object") {
              const _Array2 = Array;
              if (!Array.isArray(obj)) {
                keys = obj;
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
                        sorted1 = sorted2.map((item, index) => keys[item]);
                        const obj3 = keysSorter(Object.keys(keys));
                      }
                    }
                    keys = sorted1.sort((arg0, arg1) => Number(arg0) - Number(arg1));
                    const mapped = keys.map((item, index) => keys[item]);
                  }
                }
                acc[item] = sorted;
              }
              return acc;
            }
          }
          acc[item] = keys[item];
        }, obj);
      }
    } else {
      return obj;
    }
    const str5 = str.trim();
  }
  tmp4 = (function parserForArrayFormat(merged) {
    closure_0 = merged;
    const arrayFormat = merged.arrayFormat;
    if ("index" === arrayFormat) {
      return (str) => {
        const table = /\[(\d*)\]$/.exec(str);
        const replaced = str.replace(/\[\d*\]$/, "");
        if (table) {
          if (undefined === arg2[replaced]) {
            arg2[replaced] = {};
          }
          arg2[replaced][table[1]] = arg1;
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else if ("bracket" === arrayFormat) {
      return (str) => {
        closure_1 = /(\[\])$/.exec(str);
        const replaced = str.replace(/\[\]$/, "");
        if (closure_1) {
          if (undefined !== arg2[replaced]) {
            const items = [];
            arg2[replaced] = items.concat(arg2[replaced], arg1);
          } else {
            const items1 = [arg1];
            arg2[replaced] = items1;
          }
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else if ("colon-list-separator" === arrayFormat) {
      return (str) => {
        closure_1 = /(:list)$/.exec(str);
        const replaced = str.replace(/:list$/, "");
        if (closure_1) {
          if (undefined !== arg2[replaced]) {
            const items = [];
            arg2[replaced] = items.concat(arg2[replaced], arg1);
          } else {
            const items1 = [arg1];
            arg2[replaced] = items1;
          }
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else {
      if ("comma" !== arrayFormat) {
        if ("separator" !== arrayFormat) {
          return "bracket-separator" === arrayFormat ? ((str, str2) => {
            const isMatch = /(\[\])$/.test(str);
            const replaced = str.replace(/\[\]$/, "");
            if (isMatch) {
              if (null === str2) {
                let items = [];
              } else {
                const parts = str2.split(merged.arrayFormatSeparator);
                items = parts.map((item, index) => {
                  let tmp = item;
                  if (decode.decode) {
                    tmp = merged(closure_1_2[2])(item);
                  }
                  return tmp;
                });
              }
              if (undefined !== arg2[replaced]) {
                const items1 = [];
                arg2[replaced] = items1.concat(arg2[replaced], items);
              } else {
                arg2[replaced] = items;
              }
            } else {
              let tmp3 = str2;
              if (str2) {
                let tmp5 = str2;
                if (merged.decode) {
                  tmp5 = merged(closure_1_2[2])(str2);
                }
                tmp3 = tmp5;
              }
              arg2[replaced] = tmp3;
            }
          }) : ((arg0, arg1, arg2) => {
            if (undefined !== arg2[arg0]) {
              const items = [];
              arg2[arg0] = items.concat(arg2[arg0], arg1);
            } else {
              arg2[arg0] = arg1;
            }
          });
        }
      }
      return (arg0, str) => {
        let hasItem1 = typeof str === "string";
        let hasItem = hasItem1;
        if (typeof str === "string") {
          hasItem = str.includes(merged.arrayFormatSeparator);
        }
        if (typeof str === "string") {
          hasItem1 = !hasItem;
        }
        if (hasItem1) {
          obj = str;
          if (merged.decode) {
            obj = merged(closure_1_2[2])(str);
          }
          hasItem1 = obj.includes(merged.arrayFormatSeparator);
        }
        if (hasItem1) {
          let tmp7 = str;
          if (merged.decode) {
            tmp7 = merged(closure_1_2[2])(str);
          }
          str = tmp7;
        }
        if (!hasItem) {
          if (!hasItem1) {
            let mapped = str;
            if (null !== str) {
              let tmp13 = str;
              if (merged.decode) {
                tmp13 = merged(closure_1_2[2])(str);
              }
              mapped = tmp13;
            }
          }
          arg2[arg0] = mapped;
        }
        const parts = str.split(merged.arrayFormatSeparator);
        mapped = parts.map((item, index) => {
          let tmp = item;
          if (decode.decode) {
            tmp = merged(closure_1_2[2])(item);
          }
          return tmp;
        });
      };
    }
  })(merged);
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
  closure_0 = arg0;
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
              let items1 = lib;
              if (!lib.skipNull) {
                if (items1.skipEmptyString) {
                  tmp = encode;
                }
                if (null === arg1) {
                  const items = [];
                  encode = items1.encode;
                  if (!encode) {
                    items1 = [lib, "[", length, "]"];
                    length = items1.join("");
                    items[arraySpreadResult] = length;
                    let items2 = items;
                  } else if (items1.strict) {
                    let encodeURIComponentResult = lib(closure_2_2[1])(lib);
                  } else {
                    const _encodeURIComponent4 = encodeURIComponent;
                    encodeURIComponentResult = encodeURIComponent(lib);
                  }
                  arraySpreadResult = HermesBuiltin.arraySpread(encode, 0);
                } else {
                  items2 = [];
                  if (!items1.encode) {
                    const items3 = [lib, "[", , , ];
                    if (!items1.encode) {
                      items3[2] = length;
                      items3[3] = "]=";
                      if (!items1.encode) {
                        items3[4] = arg1;
                        items2[tmp34] = items3.join("");
                      } else if (items1.strict) {
                        let encodeURIComponentResult1 = lib(closure_2_2[1])(arg1);
                      } else {
                        const _encodeURIComponent3 = encodeURIComponent;
                        encodeURIComponentResult1 = encodeURIComponent(arg1);
                      }
                    } else if (items1.strict) {
                      let encodeURIComponentResult2 = lib(closure_2_2[1])(length);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult2 = encodeURIComponent(length);
                    }
                  } else if (items1.strict) {
                    let encodeURIComponentResult3 = lib(closure_2_2[1])(lib);
                  } else {
                    const _encodeURIComponent = encodeURIComponent;
                    encodeURIComponentResult3 = encodeURIComponent(lib);
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
              if (!lib.skipNull) {
                if (lib.skipEmptyString) {
                  tmp = items1;
                }
                if (null === arg1) {
                  const items = [];
                  if (!lib.encode) {
                    items1 = [lib, "[]"];
                    items[tmp17] = items1.join("");
                    let items2 = items;
                  } else if (lib.strict) {
                    let encodeURIComponentResult = lib(closure_2_2[1])(lib);
                  } else {
                    const _encodeURIComponent3 = encodeURIComponent;
                    encodeURIComponentResult = encodeURIComponent(lib);
                  }
                } else {
                  items2 = [];
                  if (!lib.encode) {
                    const items3 = [lib, "[]=", ];
                    if (!lib.encode) {
                      items3[2] = arg1;
                      items2[tmp29] = items3.join("");
                    } else if (lib.strict) {
                      let encodeURIComponentResult1 = lib(closure_2_2[1])(arg1);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(arg1);
                    }
                  } else if (lib.strict) {
                    let encodeURIComponentResult2 = lib(closure_2_2[1])(lib);
                  } else {
                    const _encodeURIComponent = encodeURIComponent;
                    encodeURIComponentResult2 = encodeURIComponent(lib);
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
              if (!lib.skipNull) {
                if (lib.skipEmptyString) {
                  tmp = items1;
                }
                if (null === arg1) {
                  const items = [];
                  if (!lib.encode) {
                    items1 = [lib, ":list="];
                    items[tmp17] = items1.join("");
                    let items2 = items;
                  } else if (lib.strict) {
                    let encodeURIComponentResult = lib(closure_2_2[1])(lib);
                  } else {
                    const _encodeURIComponent3 = encodeURIComponent;
                    encodeURIComponentResult = encodeURIComponent(lib);
                  }
                } else {
                  items2 = [];
                  if (!lib.encode) {
                    const items3 = [lib, ":list=", ];
                    if (!lib.encode) {
                      items3[2] = arg1;
                      items2[tmp29] = items3.join("");
                    } else if (lib.strict) {
                      let encodeURIComponentResult1 = lib(closure_2_2[1])(arg1);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(arg1);
                    }
                  } else if (lib.strict) {
                    let encodeURIComponentResult2 = lib(closure_2_2[1])(lib);
                  } else {
                    const _encodeURIComponent = encodeURIComponent;
                    encodeURIComponentResult2 = encodeURIComponent(lib);
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
                    if (!lib.skipNull) {
                      if (lib.skipEmptyString) {
                        tmp = encode;
                      }
                      if (null === arg1) {
                        const items = [];
                        encode = lib.encode;
                        if (!encode) {
                          items[arraySpreadResult] = lib;
                          let items1 = items;
                        } else if (lib.strict) {
                          let encodeURIComponentResult = lib(closure_2_2[1])(lib);
                        } else {
                          const _encodeURIComponent3 = encodeURIComponent;
                          encodeURIComponentResult = encodeURIComponent(lib);
                        }
                        arraySpreadResult = HermesBuiltin.arraySpread(encode, 0);
                      } else {
                        items1 = [];
                        if (!lib.encode) {
                          const items2 = [lib, "=", ];
                          if (!lib.encode) {
                            items2[2] = arg1;
                            items1[tmp29] = items2.join("");
                          } else if (lib.strict) {
                            let encodeURIComponentResult1 = lib(closure_2_2[1])(arg1);
                          } else {
                            const _encodeURIComponent2 = encodeURIComponent;
                            encodeURIComponentResult1 = encodeURIComponent(arg1);
                          }
                        } else if (lib.strict) {
                          let encodeURIComponentResult2 = lib(closure_2_2[1])(lib);
                        } else {
                          const _encodeURIComponent = encodeURIComponent;
                          encodeURIComponentResult2 = encodeURIComponent(lib);
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
        return (arg0) => {
          closure_0 = arg0;
          return (arg0, arg1) => {
            let tmp = arg0;
            if (undefined !== arg1) {
              if (!lib.skipNull) {
                if (lib.skipEmptyString) {
                  tmp = arg0;
                }
                let str3 = "";
                if (null !== arg1) {
                  str3 = arg1;
                }
                if (0 === arg0.length) {
                  if (!lib.encode) {
                    const items = [lib, str6, ];
                    if (!lib.encode) {
                      items[2] = str3;
                      const items1 = [items.join("")];
                      let items3 = items1;
                    } else if (lib.strict) {
                      let encodeURIComponentResult = lib(closure_2_2[1])(str3);
                    } else {
                      const _encodeURIComponent3 = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(str3);
                    }
                  } else if (lib.strict) {
                    let encodeURIComponentResult1 = lib(closure_2_2[1])(lib);
                  } else {
                    const _encodeURIComponent2 = encodeURIComponent;
                    encodeURIComponentResult1 = encodeURIComponent(lib);
                  }
                } else {
                  const items2 = [arg0, ];
                  if (!lib.encode) {
                    items2[1] = str3;
                    items3 = [items2.join(lib.arrayFormatSeparator)];
                  } else if (lib.strict) {
                    let encodeURIComponentResult2 = lib(closure_2_2[1])(str3);
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
      if (!shouldFilter(item10024)) {
        obj[item10024] = arg0[item10024];
      }
      continue;
    }
    const _Object3 = Object;
    const keys1 = Object.keys(obj);
    if (false !== merged.sort) {
      const sorted = keys1.sort(merged.sort);
    }
    const mapped = keys1.map((item, index) => {
      if (undefined === dependencyMap[item]) {
        return "";
      } else if (null === arr) {
        if (!merged.encode) {
          let text = item;
        } else if (tmp22.strict) {
          let encodeURIComponentResult = dependencyMap(1557)(item);
        } else {
          const _encodeURIComponent3 = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(item);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          if (0 !== arr.length) {
            const reduced = arr.reduce(dependencyMap2(item), []);
            let joined = reduced.join("&");
          }
          if (!merged.encode) {
            joined = `${item}[]`;
          } else if (merged.strict) {
            let encodeURIComponentResult1 = dependencyMap(1557)(item);
          } else {
            encodeURIComponentResult1 = `[]`.encodeURIComponent(item);
          }
        } else if (!merged.encode) {
          if (!merged.encode) {
            text = `${item}=${arr}`;
          } else if (merged.strict) {
            let encodeURIComponentResult2 = dependencyMap(1557)(arr);
          } else {
            const _encodeURIComponent2 = encodeURIComponent;
            encodeURIComponentResult2 = encodeURIComponent(arr);
          }
        } else if (merged.strict) {
          let encodeURIComponentResult3 = dependencyMap(1557)(item);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          encodeURIComponentResult3 = encodeURIComponent(item);
        }
      }
    });
    const found = mapped.filter((item, index) => item.length > 0);
    return found.join("&");
  } else {
    return "";
  }
};
export const parseUrl = (arr) => {
  const merged = Object.assign({ decode: true }, arg1);
  [str, tmp5] = _slicedToArray(_mod1559(arr, "#"), 2);
  const tmp4 = _slicedToArray(_mod1559(arr, "#"), 2);
  let obj = { url: str.split("?")[0] || "", query: null };
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
  obj[1] = parse(str2, merged);
  if (merged) {
    if (merged.parseFragmentIdentifier) {
      if (tmp5) {
        let tmp11 = tmp5;
        if (merged.decode) {
          tmp11 = decodeComponents(tmp5);
        }
        obj = { fragmentIdentifier: null };
        obj[0] = tmp11;
      }
      return Object.assign(obj, {});
    }
  }
  const tmp6 = str.split("?")[0] || "";
};
export const stringifyUrl = (url, merged) => {
  const obj = { encode: true, strict: true };
  obj[closure_4] = true;
  merged = Object.assign(obj, merged);
  url = url.url;
  const index = url.indexOf("#");
  let str = url;
  if (-1 !== index) {
    str = url.slice(0, index);
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
    if (merged[closure_4]) {
      if (!merged.encode) {
        let tmp8 = fragmentIdentifier;
      } else if (merged.strict) {
        let encodeURIComponentResult = _mod1557(fragmentIdentifier);
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
  tmp4 = str.split("?")[0] || "";
};
export const pick = (arg0, arg1, arg2) => {
  let obj = { parseFragmentIdentifier: true };
  obj[closure_4] = false;
  const merged = Object.assign(obj, arg2);
  const parseUrlResult = exports.parseUrl(arg0, merged);
  obj = { url: parseUrlResult.url, query: _mod1560(query, arg1), fragmentIdentifier };
  ({ query, fragmentIdentifier } = parseUrlResult);
  return exports.stringifyUrl(obj, merged);
};
export const exclude = (arg0, arg1, arg2) => {
  closure_0 = arg1;
  return exports.pick(arg0, Array.isArray(arg1) ? ((arg0) => !lib.includes(arg0)) : ((arg0, arg1) => !lib(arg0, arg1)), arg2);
};