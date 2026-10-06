// === Module 1546: extract ===

// Module 1546 (extract)
import _mod1547 from "module_1547" /* 1547 */;
import _mod1548 from "module_1548" /* 1548 */;
import _mod1549 from "module_1549" /* 1549 */;
import _mod1550 from "module_1550" /* 1550 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let closure_1;

const f84365 = (arg0, arg1) => {
  const NumberResult = Number(arg0);
  return NumberResult - Number(arg1);
};
function validateArrayFormatSeparator(arrayFormatSeparator) {
  const typeError = new TypeError("arrayFormatSeparator must be single character string");
  throw typeError;
}
function decode(arg0, decode) {
  let tmp = arg0;
  if (decode.decode) {
    tmp = _mod1548(arg0);
  }
  return tmp;
}
function keysSorter(arr) {
  let sorted;
  let closure_0 = arr;
  if (Array.isArray(arr)) {
    sorted = arr.sort();
  } else {
    sorted = arr;
    if (typeof arr === "object") {
      const _Object = Object;
      const obj = keysSorter(Object.keys(arr));
      const sorted1 = obj.sort(f84365);
      sorted = sorted1.map((item) => obj[item]);
    }
  }
  return sorted;
}
function parseValue(str, parseNumbers) {
  let NumberResult;
  if (parseNumbers.parseNumbers) {
    const _Number = Number;
    const _Number2 = Number;
    if (!Number.isNaN(Number(str))) {
      if (typeof str === "string") {
        if ("" !== str.trim()) {
          const _Number3 = Number;
          NumberResult = Number(str);
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
    tmp3 = "true" !== str.toLowerCase() && "false" !== str.toLowerCase();
    const tmp5 = "true" !== str.toLowerCase() && "false" !== str.toLowerCase();
  }
  NumberResult = str;
  if (!tmp3) {
    NumberResult = "true" === str.toLowerCase();
  }
}
function parse(str, arg1) {
  let tmp13;
  let tmp14;
  function parserForArrayFormat(merged) {
    const arrayFormat = merged.arrayFormat;
    if ("index" === arrayFormat) {
      return (str, arg1, arg2) => {
        obj = /\[(\d*)\]$/;
        closure_1 = obj.exec(str);
        const replaced = str.replace(/\[\d*\]$/, "");
        const tmp2 = closure_1;
        if (tmp2) {
          if (undefined === arg2[replaced]) {
            arg2[replaced] = {};
          }
          arg2[replaced][closure_1[1]] = arg1;
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else {
      const str = "bracket";
      if ("bracket" === arrayFormat) {
        return (str, arg1, arg2) => {
          obj = /(\[\])$/;
          closure_1 = obj.exec(str);
          const replaced = str.replace(/\[\]$/, "");
          const tmp2 = closure_1;
          if (tmp2) {
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
        const str2 = "colon-list-separator";
        if ("colon-list-separator" === arrayFormat) {
          return (str, arg1, arg2) => {
            obj = /(:list)$/;
            closure_1 = obj.exec(str);
            const replaced = str.replace(/:list$/, "");
            const tmp2 = closure_1;
            if (tmp2) {
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
              return "bracket-separator" === arrayFormat ? ((str, str2, arg2) => {
                obj = /(\[\])$/;
                const isMatch = obj.test(str);
                const replaced = str.replace(/\[\]$/, "");
                if (isMatch) {
                  let items;
                  if (null === str2) {
                    items = [];
                  } else {
                    const parts = str2.split(merged.arrayFormatSeparator);
                    items = parts.map((item) => {
                      let tmp = item;
                      if (closure_1_0.decode) {
                        tmp = closure_0(closure_2_2[2])(item);
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
                  if (tmp3) {
                    let tmp5 = str2;
                    if (merged.decode) {
                      tmp5 = obj(dependencyMap[2])(str2);
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
          return (arg0, str, arg2) => {
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
                obj = obj(dependencyMap[2])(str);
              }
              hasItem1 = obj.includes(merged.arrayFormatSeparator);
            }
            if (hasItem1) {
              if (merged.decode) {
                const tmp7 = obj(dependencyMap[2])(str);
              }
            }
            if (!hasItem) {
              let mapped;
              if (!hasItem1) {
                mapped = str;
                if (null !== str) {
                  let tmp13 = str;
                  if (merged.decode) {
                    tmp13 = obj(dependencyMap[2])(str);
                  }
                  mapped = tmp13;
                }
              }
              arg2[arg0] = mapped;
            }
            const parts = str.split(merged.arrayFormatSeparator);
            mapped = parts.map((item) => {
              let tmp = item;
              if (closure_1_0.decode) {
                tmp = closure_0(closure_2_2[2])(item);
              }
              return tmp;
            });
          };
        }
      }
    }
  }
  const merged = Object.assign({ decode: true, sort: true, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: false, parseBooleans: false }, arg1);
  let tmp2 = validateArrayFormatSeparator(merged.arrayFormatSeparator);
  let tmp3 = parserForArrayFormat(merged);
  let obj = Object.create(null);
  if (typeof str !== "string") {
    return obj;
  } else {
    const str5 = str.trim();
    const str7 = str5.replace(/^[?#&]/, "");
    if (str7) {
      str = "&";
      let parts = str7.split("&");
      const iter = parts[Symbol.iterator]();
      let str2 = "=";
      let tmp7 = parts;
      const nextResult = iter.next();
      while (iter !== undefined) {
        let str4 = nextResult;
        if ("" !== nextResult) {
          let replaced;
          let tmp42 = obj(1549);
          if (merged.decode) {
            replaced = str4.replace(/\+/g, " ");
          } else {
            replaced = str4;
          }
          let tmp12 = _slicedToArray(tmp42(replaced, "="), 2);
          [tmp13, tmp14] = tmp12;
          let tmp16 = null;
          if (undefined !== tmp14) {
            let tmp19;
            let items = ["comma", "separator", "bracket-separator"];
            if (items.includes(merged.arrayFormat)) {
              tmp19 = tmp14;
            } else {
              tmp19 = decode(tmp15, merged);
            }
            tmp16 = tmp19;
          }
          let tmp3Result = tmp3(decode(tmp13, merged), tmp16, obj);
        }
        continue;
      }
      let _Object = Object;
      let keys = Object.keys(obj);
      for (const item10064 of keys) {
        let tmp28 = obj[item10064];
        let tmp29 = tmp28;
        if (typeof tmp28 === "object") {
          if (null !== tmp29) {
            let _Object2 = Object;
            let keys1 = Object.keys(tmp29);
            for (const item10080 of keys1) {
              tmp29[item10080] = parseValue(tmp29[item10080], merged);
              continue;
            }
            continue;
          }
        }
        obj[item10064] = parseValue(tmp29, merged);
      }
      let reduced = obj;
      if (false !== merged.sort) {
        let sorted;
        if (true === merged.sort) {
          const _Object4 = Object;
          const keys2 = Object.keys(obj);
          sorted = keys2.sort();
        } else {
          const _Object3 = Object;
          const keys3 = Object.keys(obj);
          sorted = keys3.sort(merged.sort);
        }
        const _Object5 = Object;
        reduced = sorted.reduce((acc, item) => {
          obj = obj[item];
          if (Boolean(obj)) {
            if (typeof obj === "object") {
              const _Array2 = Array;
              if (!Array.isArray(obj)) {
                let sorted;
                const _Array = Array;
                if (Array.isArray(obj)) {
                  sorted = obj.sort();
                } else {
                  sorted = obj;
                  if (typeof obj === "object") {
                    let sorted1;
                    const _Object = Object;
                    const keys = Object.keys(obj);
                    const _Array3 = Array;
                    if (Array.isArray(keys)) {
                      sorted1 = keys.sort();
                    } else {
                      sorted1 = keys;
                      if (typeof keys === "object") {
                        const _Object2 = Object;
                        const obj4 = keysSorter(Object.keys(keys));
                        const sorted2 = obj4.sort(f84365);
                        sorted1 = sorted2.map((item) => obj[item]);
                      }
                    }
                    const sorted3 = sorted1.sort(f84365);
                    sorted = sorted3.map((item) => obj[item]);
                  }
                }
                acc[item] = sorted;
              }
              return acc;
            }
          }
          acc[item] = obj;
        }, Object.create(null));
      }
      return reduced;
    } else {
      return obj;
    }
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
export const stringify = (importAll, merged) => {
  function encoderForArrayFormat(merged) {
    let closure_0 = merged;
    const arrayFormat = merged.arrayFormat;
    if ("index" === arrayFormat) {
      return (arg0) => {
        let closure_0 = arg0;
        return (arg0, arg1) => {
          let tmp2 = arg0;
          if (undefined !== arg1) {
            if (!merged.skipNull) {
              if (!merged.skipEmptyString) {
                let items2;
                if (null === arg1) {
                  const items = [];
                  let tmp24 = merged;
                  const arraySpreadResult = HermesBuiltin.arraySpread(items, arg0, 0);
                  if (merged.encode) {
                    let encodeURIComponentResult;
                    if (merged.strict) {
                      encodeURIComponentResult = merged(closure_2[1])(merged);
                    } else {
                      const _encodeURIComponent4 = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(merged);
                    }
                    tmp24 = encodeURIComponentResult;
                  }
                  const items1 = [tmp24, "[", arg0.length, "]"];
                  items[arraySpreadResult] = items1.join("");
                  items2 = items;
                } else {
                  items2 = [];
                  let tmp9 = merged;
                  const arraySpreadResult2 = HermesBuiltin.arraySpread(items2, arg0, 0);
                  if (merged.encode) {
                    let encodeURIComponentResult1;
                    if (merged.strict) {
                      encodeURIComponentResult1 = merged(closure_2[1])(merged);
                    } else {
                      const _encodeURIComponent = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(merged);
                    }
                    tmp9 = encodeURIComponentResult1;
                  }
                  const items3 = [tmp9, "[", , , ];
                  let tmp10 = length;
                  if (merged.encode) {
                    let encodeURIComponentResult2;
                    if (merged.strict) {
                      encodeURIComponentResult2 = merged(closure_2[1])(length);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult2 = encodeURIComponent(length);
                    }
                    tmp10 = encodeURIComponentResult2;
                  }
                  items3[2] = tmp10;
                  items3[3] = "]=";
                  let tmp15 = arg1;
                  if (merged.encode) {
                    let encodeURIComponentResult3;
                    if (merged.strict) {
                      encodeURIComponentResult3 = merged(closure_2[1])(arg1);
                    } else {
                      const _encodeURIComponent3 = encodeURIComponent;
                      encodeURIComponentResult3 = encodeURIComponent(arg1);
                    }
                    tmp15 = encodeURIComponentResult3;
                  }
                  items3[4] = tmp15;
                  items2[arraySpreadResult2] = items3.join("");
                }
                tmp2 = items2;
              } else {
                tmp2 = arg0;
              }
            } else {
              tmp2 = arg0;
            }
          }
          return tmp2;
        };
      };
    } else if ("bracket" === arrayFormat) {
      return (arg0) => {
        let closure_0 = arg0;
        return (arg0, arg1) => {
          let tmp2 = arg0;
          if (undefined !== arg1) {
            if (!merged.skipNull) {
              if (!merged.skipEmptyString) {
                let items2;
                if (null === arg1) {
                  const items = [];
                  let tmp19 = merged;
                  const arraySpreadResult = HermesBuiltin.arraySpread(items, arg0, 0);
                  if (merged.encode) {
                    let encodeURIComponentResult;
                    if (merged.strict) {
                      encodeURIComponentResult = merged(closure_2[1])(merged);
                    } else {
                      const _encodeURIComponent3 = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(merged);
                    }
                    tmp19 = encodeURIComponentResult;
                  }
                  const items1 = [tmp19, "[]"];
                  items[arraySpreadResult] = items1.join("");
                  items2 = items;
                } else {
                  items2 = [];
                  let tmp9 = merged;
                  const arraySpreadResult2 = HermesBuiltin.arraySpread(items2, arg0, 0);
                  if (merged.encode) {
                    let encodeURIComponentResult1;
                    if (merged.strict) {
                      encodeURIComponentResult1 = merged(closure_2[1])(merged);
                    } else {
                      const _encodeURIComponent = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(merged);
                    }
                    tmp9 = encodeURIComponentResult1;
                  }
                  const items3 = [tmp9, "[]=", ];
                  let tmp10 = arg1;
                  if (merged.encode) {
                    let encodeURIComponentResult2;
                    if (merged.strict) {
                      encodeURIComponentResult2 = merged(closure_2[1])(arg1);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult2 = encodeURIComponent(arg1);
                    }
                    tmp10 = encodeURIComponentResult2;
                  }
                  items3[2] = tmp10;
                  items2[arraySpreadResult2] = items3.join("");
                }
                tmp2 = items2;
              } else {
                tmp2 = arg0;
              }
            } else {
              tmp2 = arg0;
            }
          }
          return tmp2;
        };
      };
    } else if ("colon-list-separator" === arrayFormat) {
      return (arg0) => {
        let closure_0 = arg0;
        return (arg0, arg1) => {
          let tmp2 = arg0;
          if (undefined !== arg1) {
            if (!merged.skipNull) {
              if (!merged.skipEmptyString) {
                let items2;
                if (null === arg1) {
                  const items = [];
                  let tmp19 = merged;
                  const arraySpreadResult = HermesBuiltin.arraySpread(items, arg0, 0);
                  if (merged.encode) {
                    let encodeURIComponentResult;
                    if (merged.strict) {
                      encodeURIComponentResult = merged(closure_2[1])(merged);
                    } else {
                      const _encodeURIComponent3 = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(merged);
                    }
                    tmp19 = encodeURIComponentResult;
                  }
                  const items1 = [tmp19, ":list="];
                  items[arraySpreadResult] = items1.join("");
                  items2 = items;
                } else {
                  items2 = [];
                  let tmp9 = merged;
                  const arraySpreadResult2 = HermesBuiltin.arraySpread(items2, arg0, 0);
                  if (merged.encode) {
                    let encodeURIComponentResult1;
                    if (merged.strict) {
                      encodeURIComponentResult1 = merged(closure_2[1])(merged);
                    } else {
                      const _encodeURIComponent = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(merged);
                    }
                    tmp9 = encodeURIComponentResult1;
                  }
                  const items3 = [tmp9, ":list=", ];
                  let tmp10 = arg1;
                  if (merged.encode) {
                    let encodeURIComponentResult2;
                    if (merged.strict) {
                      encodeURIComponentResult2 = merged(closure_2[1])(arg1);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult2 = encodeURIComponent(arg1);
                    }
                    tmp10 = encodeURIComponentResult2;
                  }
                  items3[2] = tmp10;
                  items2[arraySpreadResult2] = items3.join("");
                }
                tmp2 = items2;
              } else {
                tmp2 = arg0;
              }
            } else {
              tmp2 = arg0;
            }
          }
          return tmp2;
        };
      };
    } else {
      let str3 = "comma";
      if ("comma" !== arrayFormat) {
        if ("separator" !== arrayFormat) {
          if ("bracket-separator" !== arrayFormat) {
            return (arg0) => {
              let closure_0 = arg0;
              return (arg0, arg1) => {
                let tmp2 = arg0;
                if (undefined !== arg1) {
                  if (!merged.skipNull) {
                    if (!merged.skipEmptyString) {
                      let items1;
                      if (null === arg1) {
                        const items = [];
                        let tmp19 = merged;
                        const arraySpreadResult = HermesBuiltin.arraySpread(items, arg0, 0);
                        if (merged.encode) {
                          let encodeURIComponentResult;
                          if (merged.strict) {
                            encodeURIComponentResult = merged(closure_2[1])(merged);
                          } else {
                            const _encodeURIComponent3 = encodeURIComponent;
                            encodeURIComponentResult = encodeURIComponent(merged);
                          }
                          tmp19 = encodeURIComponentResult;
                        }
                        items[arraySpreadResult] = tmp19;
                        items1 = items;
                      } else {
                        items1 = [];
                        let tmp9 = merged;
                        const arraySpreadResult2 = HermesBuiltin.arraySpread(items1, arg0, 0);
                        if (merged.encode) {
                          let encodeURIComponentResult1;
                          if (merged.strict) {
                            encodeURIComponentResult1 = merged(closure_2[1])(merged);
                          } else {
                            const _encodeURIComponent = encodeURIComponent;
                            encodeURIComponentResult1 = encodeURIComponent(merged);
                          }
                          tmp9 = encodeURIComponentResult1;
                        }
                        const items2 = [tmp9, "=", ];
                        let tmp10 = arg1;
                        if (merged.encode) {
                          let encodeURIComponentResult2;
                          if (merged.strict) {
                            encodeURIComponentResult2 = merged(closure_2[1])(arg1);
                          } else {
                            const _encodeURIComponent2 = encodeURIComponent;
                            encodeURIComponentResult2 = encodeURIComponent(arg1);
                          }
                          tmp10 = encodeURIComponentResult2;
                        }
                        items2[2] = tmp10;
                        items1[arraySpreadResult2] = items2.join("");
                      }
                      tmp2 = items1;
                    } else {
                      tmp2 = arg0;
                    }
                  } else {
                    tmp2 = arg0;
                  }
                }
                return tmp2;
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
        let closure_0 = arg0;
        return (arg0, arg1) => {
          let tmp = arg0;
          if (undefined !== arg1) {
            if (!merged.skipNull) {
              if (!merged.skipEmptyString) {
                let items3;
                let str3 = "";
                if (null !== arg1) {
                  str3 = arg1;
                }
                if (0 === arg0.length) {
                  let tmp10 = merged;
                  if (merged.encode) {
                    let encodeURIComponentResult;
                    if (merged.strict) {
                      encodeURIComponentResult = merged(closure_2[1])(merged);
                    } else {
                      const _encodeURIComponent2 = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(merged);
                    }
                    tmp10 = encodeURIComponentResult;
                  }
                  const items = [tmp10, str6, ];
                  let tmp16 = str3;
                  if (merged.encode) {
                    let encodeURIComponentResult1;
                    if (merged.strict) {
                      encodeURIComponentResult1 = merged(closure_2[1])(str3);
                    } else {
                      const _encodeURIComponent3 = encodeURIComponent;
                      encodeURIComponentResult1 = encodeURIComponent(str3);
                    }
                    tmp16 = encodeURIComponentResult1;
                  }
                  items[2] = tmp16;
                  const items1 = [items.join("")];
                  items3 = items1;
                } else {
                  const items2 = [arg0, ];
                  let tmp4 = str3;
                  if (merged.encode) {
                    let encodeURIComponentResult2;
                    if (merged.strict) {
                      encodeURIComponentResult2 = merged(closure_2[1])(str3);
                    } else {
                      const _encodeURIComponent = encodeURIComponent;
                      encodeURIComponentResult2 = encodeURIComponent(str3);
                    }
                    tmp4 = encodeURIComponentResult2;
                  }
                  items2[1] = tmp4;
                  items3 = [items2.join(merged.arrayFormatSeparator)];
                }
                tmp = items3;
              } else {
                tmp = arg0;
              }
            } else {
              tmp = arg0;
            }
          }
          return tmp;
        };
      };
    }
  }
  if (importAll) {
    let tmp2 = globalThis;
    const _Object = Object;
    merged = Object.assign({ encode: true, strict: true, arrayFormat: "none", arrayFormatSeparator: "," }, merged);
    let tmp4 = validateArrayFormatSeparator(merged.arrayFormatSeparator);
    function shouldFilter(item10024) {
      let skipNull = merged.skipNull && null == importAll[item10024];
      if (!skipNull) {
        const skipEmptyString = merged.skipEmptyString && "" === importAll[item10024];
        skipNull = skipEmptyString;
      }
      return skipNull;
    }
    let closure_2 = encoderForArrayFormat(merged);
    const obj = {};
    const _Object2 = Object;
    const keys = Object.keys(importAll);
    let tmp7 = keys;
    for (const item10024 of keys) {
      if (!shouldFilter(item10024)) {
        obj[item10024] = importAll[item10024];
      }
      continue;
    }
    const _Object3 = Object;
    const keys1 = Object.keys(obj);
    if (false !== merged.sort) {
      const sorted = keys1.sort(merged.sort);
    }
    const mapped = keys1.map((item) => {
      let str = "";
      if (undefined !== importAll[item]) {
        let sum;
        if (null === importAll[item]) {
          let tmp19 = item;
          if (merged.encode) {
            let encodeURIComponentResult;
            if (merged.strict) {
              encodeURIComponentResult = _mod1547(item);
            } else {
              const _encodeURIComponent4 = encodeURIComponent;
              encodeURIComponentResult = encodeURIComponent(item);
            }
            tmp19 = encodeURIComponentResult;
          }
          sum = tmp19;
        } else {
          const _Array = Array;
          if (Array.isArray(importAll[item])) {
            if (0 === importAll[item].length) {
              let text;
              if ("bracket-separator" === merged.arrayFormat) {
                let tmp15 = item;
                if (merged.encode) {
                  let encodeURIComponentResult1;
                  if (merged.strict) {
                    encodeURIComponentResult1 = _mod1547(item);
                  } else {
                    const _encodeURIComponent3 = encodeURIComponent;
                    encodeURIComponentResult1 = encodeURIComponent(item);
                  }
                  tmp15 = encodeURIComponentResult1;
                }
                text = `${tmp15}[]`;
              }
              sum = text;
            }
            const reduced = arr.reduce(closure_2(item), []);
            text = reduced.join("&");
          } else {
            let tmp2 = item;
            if (merged.encode) {
              let encodeURIComponentResult2;
              if (merged.strict) {
                encodeURIComponentResult2 = _mod1547(item);
              } else {
                const _encodeURIComponent = encodeURIComponent;
                encodeURIComponentResult2 = encodeURIComponent(item);
              }
              tmp2 = encodeURIComponentResult2;
            }
            let tmp7 = arr;
            const text1 = `${tmp2}=`;
            if (merged.encode) {
              let encodeURIComponentResult3;
              if (merged.strict) {
                encodeURIComponentResult3 = _mod1547(arr);
              } else {
                const _encodeURIComponent2 = encodeURIComponent;
                encodeURIComponentResult3 = encodeURIComponent(arr);
              }
              tmp7 = encodeURIComponentResult3;
            }
            sum = text1 + tmp7;
          }
        }
        str = sum;
      }
      return str;
    });
    const found = mapped.filter((item) => item.length > 0);
    const str2 = "&";
    return found.join("&");
  } else {
    let str = "";
    return "";
  }
};
export const parseUrl = (arr, arg1) => {
  let str;
  let str2;
  let tmp5;
  const merged = Object.assign({ decode: true }, arg1);
  [str, tmp5] = _mod1549(arr, "#");
  const _Object = Object;
  _slicedToArray(_mod1549(arr, "#"), 2);
  const request = { url: str.split("?")[0] || "", query: parse(str2, merged) };
  str.split("?")[0] || "";
  const index = arr.indexOf("#");
  let substr = arr;
  if (-1 !== index) {
    substr = arr.slice(0, index);
  }
  const index1 = substr.indexOf("?");
  str2 = "";
  if (-1 !== index1) {
    str2 = substr.slice(index1 + 1);
  }
  if (merged) {
    if (merged.parseFragmentIdentifier) {
      if (tmp5) {
        if (merged.decode) {
          const tmp11 = _mod1548(tmp5);
        }
      }
      return assign(request, {});
    }
  }
};
export const stringifyUrl = (request, merged) => {
  const obj = { encode: true, strict: true };
  obj[closure_4] = true;
  merged = Object.assign(obj, merged);
  const url = request.url;
  const index = url.indexOf("#");
  let str = url;
  if (-1 !== index) {
    str = url.slice(0, index);
  }
  const tmp4 = str.split("?")[0] || "";
  const json = exports.stringify(Object.assign(exports.parse(exports.extract(request.url), { sort: false }), request.query), merged);
  let combined = json;
  if (combined) {
    const _HermesInternal = HermesInternal;
    combined = "?" + json;
  }
  const url1 = request.url;
  const index1 = url1.indexOf("#");
  let str2 = "";
  if (-1 !== index1) {
    str2 = url1.slice(index1);
  }
  if (request.fragmentIdentifier) {
    let tmp8;
    const fragmentIdentifier = request.fragmentIdentifier;
    if (merged[closure_4]) {
      let tmp9 = fragmentIdentifier;
      if (merged.encode) {
        let encodeURIComponentResult;
        if (merged.strict) {
          encodeURIComponentResult = _mod1547(fragmentIdentifier);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          encodeURIComponentResult = encodeURIComponent(fragmentIdentifier);
        }
        tmp9 = encodeURIComponentResult;
      }
      tmp8 = tmp9;
    } else {
      tmp8 = fragmentIdentifier;
    }
    const _HermesInternal2 = HermesInternal;
    str2 = "#" + tmp8;
  }
  return "" + tmp4 + combined + str2;
};
export const pick = (arg0, arg1, arg2) => {
  let fragmentIdentifier;
  let query;
  const obj = { parseFragmentIdentifier: true };
  obj[closure_4] = false;
  const merged = Object.assign(obj, arg2);
  const parseUrlResult = exports.parseUrl(arg0, merged);
  const request = { url: parseUrlResult.url, query: _mod1550(query, arg1), fragmentIdentifier };
  ({ query, fragmentIdentifier } = parseUrlResult);
  const stringifyUrl = exports.stringifyUrl;
  return stringifyUrl(request, merged);
};
export const exclude = (arg0, arg1, arg2) => {
  let closure_0 = arg1;
  return exports.pick(arg0, Array.isArray(arg1) ? ((arg0) => !closure_0.includes(arg0)) : ((arg0, arg1) => !closure_0(arg0, arg1)), arg2);
};