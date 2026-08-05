import { 00576__ } from "metro/00576__.js";
// _runtime/00575_addNumericSeparator.js
function addNumericSeparator(cause, typeError1) {
  let call5;
  let call6;
  if (cause !== Infinity) {
    if (cause !== -Infinity) {
      if (cause == cause) {
        const call = test.call;
        if (!(typeof call === "unknown" ? tmp(typeError1) : call(tmp2, typeError1))) {
          const tmp3 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if (typeof cause === "number") {
            if (cause < 0) {
              let tmp5 = -floor(-cause);
            } else {
              tmp5 = floor(cause);
            }
            if (tmp5 !== cause) {
              const _String = String;
              const StringResult = String(tmp5);
              const call3 = slice.call;
              const sum = StringResult.length + 1;
              const call4 = replace.call;
              if (typeof call4 === "unknown") {
                tmp13(tmp3, "$&_");
              } else {
                call4(StringResult, tmp3, "$&_");
              }
              ({ call: call5, call: call6 } = replace);
              const tmp16 = /([0-9]{3})/g;
              const text = `${tmp14}.`;
              if (typeof call6 === "unknown") {
                let tmp13Result = tmp13(tmp16, "$&_");
              } else {
                tmp13Result = call6(tmp12, tmp16, "$&_");
              }
              const tmp18 = /_$/;
              if (typeof call5 === "unknown") {
                let tmp13Result1 = tmp13(tmp18, "");
              } else {
                tmp13Result1 = call5(tmp13Result, tmp18, "");
              }
              return text + tmp13Result1;
            }
          }
          const call2 = replace.call;
          if (typeof call2 === "unknown") {
            let call2Result = replace(tmp3, "$&_");
          } else {
            call2Result = call2(typeError1, tmp3, "$&_");
          }
          return call2Result;
        }
        tmp = test;
        tmp2 = /e/;
      }
    }
  }
  return typeError1;
}
function isSymbol(custom) {
  if (closure_26) {
    let tmp2 = custom;
    if (custom) {
      tmp2 = typeof custom === "object";
    }
    if (tmp2) {
      const _Symbol = Symbol;
      tmp2 = custom instanceof Symbol;
    }
    return tmp2;
  } else if (typeof custom === "symbol") {
    return true;
  } else {
    if (custom) {
      if (typeof custom === "object") {
        if (toString) {
          try {
            const call = tmp4.call;
            if (typeof call === "unknown") {
              tmp4();
            } else {
              call(custom);
            }
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
    return false;
  }
}
function inspectString(cause, maxStringLength) {
  let call;
  let call2;
  if (cause.length > maxStringLength.maxStringLength) {
    const diff = cause.length - maxStringLength.maxStringLength;
    let str4 = "";
    if (diff > 1) {
      str4 = "s";
    }
    const _HermesInternal = HermesInternal;
    const call3 = slice.call;
    maxStringLength = maxStringLength.maxStringLength;
    const combined = `... ${tmp9}` + " more character" + str4;
    if (typeof call3 === "unknown") {
      let call3Result = slice(0, maxStringLength);
    } else {
      call3Result = call3(cause, 0, maxStringLength);
    }
    return inspectString(call3Result, maxStringLength) + combined;
  } else {
    let str = maxStringLength.quoteStyle;
    if (!str) {
      str = "single";
    }
    obj[str].lastIndex = 0;
    ({ call, call: call2 } = replace);
    if (typeof call2 === "unknown") {
      let call2Result = tmp2(tmp, "\\$1");
    } else {
      call2Result = call2(cause, tmp, "\\$1");
    }
    const tmp4 = /[\x00-\x1f]/g;
    let str3 = maxStringLength.quoteStyle;
    if (!str3) {
      str3 = "single";
    }
    return dependencyMap2[str3] + (typeof call === "unknown" ? replace(tmp4, lowbyte) : call(call2Result, tmp4, lowbyte)) + dependencyMap2[str3];
  }
}
function lowbyte(str) {
  str = str.charCodeAt(0);
  const tmp = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[str];
  if (tmp) {
    let text = `\\${tmp}`;
  } else {
    let str2 = "";
    if (str < 16) {
      str2 = "0";
    }
    const call = toUpperCase.call;
    str = str.toString(16);
    text = `\\x${str2}${typeof call === "unknown" ? toUpperCase() : call(tmp3)}`;
    const tmp2 = toUpperCase;
  }
  return text;
}
function arrObjKeys(cause, inspect) {
  let length;
  const call = toString.call;
  let tmp2 = "[object Array]" === (typeof call === "unknown" ? toString() : call(cause));
  if (tmp2) {
    let tmp4 = !toStringTag;
    if (toStringTag) {
      let tmp5 = typeof cause === "object";
      if (typeof cause === "object") {
        let tmp6 = tmp3 in cause;
        if (!tmp6) {
          tmp6 = undefined !== cause[tmp3];
        }
        tmp5 = tmp6;
      }
      tmp4 = !tmp5;
    }
    tmp2 = tmp4;
  }
  let items = [];
  if (tmp2) {
    items.length = cause.length;
    for (let num = 0; num < cause.length; num = num + 1) {
      let tmp7 = closure_35;
      let call2 = closure_35.call;
      let tmp8 = num;
      let str2 = "";
      if (typeof call2 === "unknown" ? tmp7(num) : call2(cause, num)) {
        str2 = inspect(cause[num], cause);
      }
      items[num] = str2;
    }
  }
  if (typeof getOwnPropertySymbols === "function") {
    items = tmp9(cause);
  } else {
    items = [];
  }
  if (closure_26) {
    const obj = {};
    let num = 0;
    let tmp10 = obj;
    if (0 < items.length) {
      do {
        obj["$" + items[num]] = items[num];
        num = num + 1;
        tmp10 = obj;
        length = items.length;
      } while (num < length);
    }
  }
  for (const key10048 in arg0) {
    let tmp26 = key10048;
    let tmp27 = closure_35;
    let call5 = closure_35.call;
    if (typeof call5 === "unknown") {
      let call5Result = tmp27(key10048);
    } else {
      call5Result = call5(arg0, key10048);
    }
    if (!call5Result) {
      continue;
    } else {
      let tmp12 = tmp2;
      if (tmp2) {
        let _String = String;
        let _Number = Number;
        tmp12 = String(Number(key10048)) === key10048;
      }
      if (tmp12) {
        tmp12 = key10048 < arg0.length;
      }
      if (!tmp12) {
        let tmp13 = closure_26;
        if (closure_26) {
          let _Symbol = Symbol;
          tmp13 = tmp10["$" + key10048] instanceof Symbol;
        }
        tmp12 = tmp13;
      }
      if (tmp12) {
        continue;
      } else {
        let tmp14 = test;
        let call3 = test.call;
        let tmp15 = /[^\w$]/;
        if (typeof call3 === "unknown") {
          let call3Result = tmp14(key10048);
        } else {
          call3Result = call3(tmp15, key10048);
        }
        let push = items.push;
        if (call3Result) {
          let text = `${arg1(key10048, arg0)}: `;
          let arr = push(`${arg1(key10048, arg0)}: ` + arg1(arg0[key10048], arg0));
          continue;
        } else {
          let text1 = `${key10048}: `;
          arr = push(`${key10048}: ` + arg1(arg0[key10048], arg0));
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  if (typeof getOwnPropertySymbols === "function") {
    for (let num4 = 0; num4 < items.length; num4 = num4 + 1) {
      let tmp21 = propertyIsEnumerable;
      let call4 = propertyIsEnumerable.call;
      let tmp22 = items[num4];
      let tmp23 = num4;
      if (typeof call4 === "unknown" ? tmp21(tmp22) : call4(cause, tmp22)) {
        let text2 = `[${inspect(arr2[num4])}`;
        let arr1 = items.push(`${`[${inspect(arr2[num4])}`}]: ${inspect(cause[arr2[num4]], cause)}`);
      }
    }
  }
  return items;
}
let forEach = typeof Map === "function";
if (typeof Map === "function") {
  const _Map3 = Map;
  forEach = Map.prototype;
}
let ownPropertyDescriptor = null;
if (Object.getOwnPropertyDescriptor) {
  ownPropertyDescriptor = null;
  if (forEach) {
    let _Object = Object;
    let _Map = Map;
    ownPropertyDescriptor = Object.getOwnPropertyDescriptor(Map.prototype, "size");
  }
}
let get = null;
if (forEach) {
  get = null;
  if (ownPropertyDescriptor) {
    get = null;
    if (typeof ownPropertyDescriptor.get === "function") {
      get = ownPropertyDescriptor.get;
    }
  }
}
if (forEach) {
  const _Map2 = Map;
  forEach = Map.prototype.forEach;
}
let forEach2 = typeof Set === "function";
if (typeof Set === "function") {
  const _Set3 = Set;
  forEach2 = Set.prototype;
}
let ownPropertyDescriptor1 = null;
if (Object.getOwnPropertyDescriptor) {
  ownPropertyDescriptor1 = null;
  if (forEach2) {
    let _Object2 = Object;
    let _Set = Set;
    ownPropertyDescriptor1 = Object.getOwnPropertyDescriptor(Set.prototype, "size");
  }
}
let get1 = null;
if (forEach2) {
  get1 = null;
  if (ownPropertyDescriptor1) {
    get1 = null;
    if (typeof ownPropertyDescriptor1.get === "function") {
      get1 = ownPropertyDescriptor1.get;
    }
  }
}
if (forEach2) {
  const _Set2 = Set;
  forEach2 = Set.prototype.forEach;
}
let has = null;
if (typeof WeakMap === "function") {
  const _WeakMap2 = WeakMap;
  has = null;
  if (WeakMap.prototype) {
    let _WeakMap = WeakMap;
    has = WeakMap.prototype.has;
  }
}
let has1 = null;
if (typeof WeakSet === "function") {
  const _WeakSet2 = WeakSet;
  has1 = null;
  if (WeakSet.prototype) {
    let _WeakSet = WeakSet;
    has1 = WeakSet.prototype.has;
  }
}
let deref = null;
if (typeof WeakRef === "function") {
  const _WeakRef2 = WeakRef;
  deref = null;
  if (WeakRef.prototype) {
    const _WeakRef = WeakRef;
    deref = WeakRef.prototype.deref;
  }
}
toString = Function.prototype.toString;
slice = Array.prototype.slice;
valueOf = null;
if (typeof BigInt === "function") {
  const _BigInt = BigInt;
  valueOf = BigInt.prototype.valueOf;
}
toString = null;
if (typeof Symbol === "function") {
  const _Symbol3 = Symbol;
  toString = null;
  if (typeof Symbol.iterator === "symbol") {
    const _Symbol4 = Symbol;
    toString = Symbol.prototype.toString;
  }
}
let tmp10 = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol5 = Symbol;
  tmp10 = typeof Symbol.iterator === "object";
}
let closure_26 = tmp10;
let toStringTag = null;
if (typeof Symbol === "function") {
  const _Symbol6 = Symbol;
  toStringTag = null;
  if (Symbol.toStringTag) {
    let _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
    const _Symbol2 = Symbol;
    toStringTag = Symbol.toStringTag;
  }
}
if (typeof Reflect === "function") {
  const _Reflect = Reflect;
} else {
  let _Object3 = Object;
  getPrototypeOf = Object.getPrototypeOf;
}
if (!getPrototypeOf) {
  let _Array = Array;
  let fn = null;
  if ([].__proto__ === Array.prototype) {
    fn = (arg0) => arg0.__proto__;
  }
  getPrototypeOf = fn;
}
let custom = null;
if (isSymbol(require("module_576").custom)) {
  custom = require("module_576").custom;
}
let closure_32 = Object.create(null);
let obj = Object.create(null);
obj[0] = /(["\\])/g;
obj[1] = /(['\\])/g;
function inspect_(cause, maxStringLength, arg2, closure_2) {
  let closure_0 = cause;
  let obj = maxStringLength;
  let _require = arg2;
  let dependencyMap = closure_2;
  if (!maxStringLength) {
    obj = {};
  }
  let typeError1 = closure_35;
  let call = closure_35.call;
  if (typeof call === "unknown") {
    let str = "quoteStyle";
    let typeError1Result = typeError1("quoteStyle");
  } else {
    str = "quoteStyle";
    typeError1Result = call(obj, "quoteStyle");
  }
  if (typeError1Result) {
    const quoteStyle = obj.quoteStyle;
    let call2 = typeError1.call;
    if (!(typeof call2 === "unknown" ? typeError1(quoteStyle) : call2(tmp3, quoteStyle))) {
      const _TypeError = TypeError;
      const typeError = new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
      throw typeError;
    }
    tmp3 = dependencyMap2;
  }
  let call3 = typeError1.call;
  if (typeof call3 === "unknown") {
    let typeError1Result1 = typeError1("maxStringLength");
  } else {
    str = "maxStringLength";
    typeError1Result1 = call3(obj, "maxStringLength");
  }
  if (typeError1Result1) {
    if (typeof obj.maxStringLength === "number") {
      let tmp10 = obj.maxStringLength < 0;
      if (tmp10) {
        tmp10 = obj.maxStringLength !== Infinity;
      }
      let tmp11 = tmp10;
    } else {
      typeError1 = null;
      tmp11 = null !== obj.maxStringLength;
    }
    if (tmp11) {
      typeError1 = globalThis;
      const _TypeError5 = TypeError;
      typeError1 = new.target;
      str = "option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`";
      typeError1 = new.target;
      typeError1 = new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
      throw typeError1;
    }
  }
  const call4 = typeError1.call;
  if (typeof call4 === "unknown") {
    let typeError1Result2 = typeError1("customInspect");
  } else {
    str = "customInspect";
    typeError1Result2 = call4(obj, "customInspect");
  }
  let customInspect = !typeError1Result2;
  if (typeError1Result2) {
    customInspect = obj.customInspect;
  }
  if (typeof customInspect !== "boolean") {
    str = "symbol";
    if ("symbol" !== customInspect) {
      typeError1 = globalThis;
      const _TypeError4 = TypeError;
      typeError1 = new.target;
      str = "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`";
      typeError1 = new.target;
      typeError1 = new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      throw typeError1;
    }
  }
  const call5 = typeError1.call;
  if (typeof call5 === "unknown") {
    let typeError1Result3 = typeError1("indent");
  } else {
    str = "indent";
    typeError1Result3 = call5(obj, "indent");
  }
  if (typeError1Result3) {
    if (null !== obj.indent) {
      if ("\t" !== obj.indent) {
        const _parseInt = parseInt;
        const _TypeError2 = TypeError;
        const typeError2 = new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
        throw typeError2;
      }
    }
  }
  const call6 = typeError1.call;
  if (typeof call6 === "unknown") {
    let typeError1Result4 = typeError1("numericSeparator");
  } else {
    str = "numericSeparator";
    typeError1Result4 = call6(obj, "numericSeparator");
  }
  if (typeError1Result4) {
    if (typeof obj.numericSeparator !== "boolean") {
      typeError1 = globalThis;
      const _TypeError3 = TypeError;
      typeError1 = new.target;
      str = "option \"numericSeparator\", if provided, must be `true` or `false`";
      typeError1 = new.target;
      typeError1 = new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
      throw typeError1;
    }
  }
  const numericSeparator = obj.numericSeparator;
  if (undefined === cause) {
    str = "undefined";
    return "undefined";
  } else {
    typeError1 = null;
    if (null === cause) {
      str = "null";
      return "null";
    } else if (typeof cause === "boolean") {
      str = "false";
      if (cause) {
        str = "true";
      }
      return str;
    } else if (typeof cause === "string") {
      typeError1 = inspectString;
      return inspectString(cause, obj);
    } else if (typeof cause === "number") {
      if (0 === cause) {
        str = "-0";
        if (0 < Infinity / cause) {
          str = "0";
        }
        return str;
      } else {
        typeError1 = globalThis;
        const _String10 = String;
        typeError1 = String(cause);
        if (numericSeparator) {
          typeError1 = addNumericSeparator;
          typeError1 = addNumericSeparator(cause, typeError1);
        }
        return typeError1;
      }
    } else if (typeof cause === "bigint") {
      typeError1 = globalThis;
      const _String9 = String;
      str = "n";
      typeError1 = `${String(cause)}n`;
      if (numericSeparator) {
        typeError1 = addNumericSeparator;
        typeError1 = addNumericSeparator(cause, `${String(cause)}n`);
      }
      return typeError1;
    } else {
      let num5 = 5;
      if (undefined !== obj.depth) {
        num5 = obj.depth;
      }
      let num6 = arg2;
      let num7 = arg2;
      if (undefined === arg2) {
        _require = 0;
        num6 = 0;
        num7 = 0;
      }
      if (num7 >= num5) {
        if (num5 > 0) {
          if (typeof cause === "object") {
            typeError1 = toString;
            const call46 = toString.call;
            str = "[object Array]";
            typeError1 = "[object Array]" === (typeof call46 === "unknown" ? typeError1() : call46(cause));
            if (typeError1) {
              typeError1 = toStringTag;
              typeError1 = !toStringTag;
              if (toStringTag) {
                typeError1 = typeof cause === "object";
                if (typeof cause === "object") {
                  typeError1 = typeError1 in cause || undefined !== cause[typeError1];
                }
                typeError1 = !typeError1;
              }
            }
            str = "[Object]";
            if (typeError1) {
              str = "[Array]";
            }
            return str;
          }
        }
      }
      if ("\t" === obj.indent) {
        obj = { base: null, prev: null };
        obj[0] = "\t";
        const call8 = join.call;
        const _Array2 = Array;
        obj[1] = typeof call8 === "unknown" ? join("\t") : call8(Array(num7 + 1), "\t");
        const ArrayResult = Array(num7 + 1);
        const tmp27 = join;
      } else {
        let prev = null;
        if (typeof obj.indent === "number") {
          prev = null;
          if (obj.indent > 0) {
            const call7 = join.call;
            const _Array = Array;
            if (typeof call7 === "unknown") {
              let call7Result = tmp22(" ");
            } else {
              str = " ";
              call7Result = call7(ArrayResult1, " ");
            }
            ArrayResult1 = Array(obj.indent + 1);
            tmp22 = join;
          }
        }
        if (undefined === dependencyMap) {
          dependencyMap = [];
        } else {
          if (arr.indexOf) {
            let num15 = arr.indexOf(cause);
          } else {
            let num12 = 0;
            num15 = -1;
            if (0 < arr.length) {
              num15 = num12;
              while (arr[num12] !== cause) {
                let sum = num12 + 1;
                num12 = sum;
                num15 = -1;
                if (sum < length) {
                  continue;
                } else {
                  break;
                }
                break;
              }
            }
          }
          if (num15 >= 0) {
            return "[Circular]";
          }
        }
        function inspect(arg0, arg1, arg2) {
          if (!arg1) {
            if (arg2) {
              const obj = { depth: null };
              obj[0] = obj.depth;
              const call2 = outer1_35.call;
              if (typeof call2 === "unknown") {
                let call2Result = outer1_35("quoteStyle");
              } else {
                call2Result = call2(tmp10, "quoteStyle");
              }
              if (call2Result) {
                obj.quoteStyle = tmp10.quoteStyle;
              }
              return outer1_39(arg0, obj, c1 + 1, arr);
            } else {
              return outer1_39(arg0, obj, c1 + 1, arr);
            }
          } else {
            const call = outer1_21.call;
            arr = typeof call === "unknown" ? outer1_21() : call(arr);
            arr = arr.push(arg1);
            const tmp = outer1_21;
          }
        }
        if (typeof cause === "function") {
          typeError1 = toString;
          const call47 = toString.call;
          let tmp33 = "[object RegExp]" === (typeof call47 === "unknown" ? typeError1() : call47(cause));
          if (tmp33) {
            let tmp35 = !toStringTag;
            if (toStringTag) {
              let tmp36 = typeof cause === "object";
              if (typeof cause === "object") {
                tmp36 = tmp34 in cause || undefined !== cause[tmp34];
                const tmp37 = tmp34 in cause || undefined !== cause[tmp34];
              }
              tmp35 = !tmp36;
            }
            tmp33 = tmp35;
          }
          if (!tmp33) {
            if (cause.name) {
              let name = cause.name;
            } else {
              const call9 = match.call;
              const call10 = toString.call;
              const tmp41 = /^function\s*([\w$]+)/;
              const tmp42 = typeof call9 === "unknown" ? match(tmp41) : call9(typeof call10 === "unknown" ? toString() : call10(cause), tmp41);
              name = null;
              if (tmp42) {
                name = tmp42[1];
              }
              const tmp38 = match;
              const tmp39 = toString;
              const tmp40 = typeof call10 === "unknown" ? toString() : call10(cause);
            }
            let arr2 = arrObjKeys(cause, inspect);
            let str13 = " (anonymous)";
            if (name) {
              str13 = `: ${tmp43}`;
            }
            if (arr2.length <= 0) {
              const _HermesInternal = HermesInternal;
              return "[Function" + str13 + "]" + "";
            } else {
              const call11 = join.call;
              if (typeof call11 === "unknown") {
                tmp45(", ");
              } else {
                str = ", ";
                call11(arr2, ", ");
              }
              const text = `${" { " + tmp46} }`;
              tmp45 = join;
            }
          }
        }
        if (isSymbol(cause)) {
          if (closure_26) {
            typeError1 = replace;
            const call45 = replace.call;
            typeError1 = globalThis;
            const _String8 = String;
            typeError1 = String(cause);
            typeError1 = /^(Symbol\(.*\))_[^)]*$/;
            if (typeof call45 === "unknown") {
              str = "$1";
              typeError1 = typeError1(typeError1, "$1");
            } else {
              str = "$1";
              typeError1 = call45(typeError1, typeError1, "$1");
            }
          } else {
            typeError1 = toString;
            const call44 = toString.call;
            typeError1 = typeof call44 === "unknown" ? typeError1() : call44(cause);
            if (typeof cause === "object") {
              if (!typeError1) {
                str = "Object(";
                str = ")";
                typeError1 = `${"Object(" + tmp})`;
              }
            }
            return typeError1;
          }
        } else {
          let flag = false;
          if (cause) {
            flag = false;
            if (typeof cause === "object") {
              typeError1 = globalThis;
              if (typeof globalThis.HTMLElement === "undefined") {
                const nodeName = cause.nodeName;
                let tmp50 = typeof nodeName === "string";
                if (typeof nodeName === "string") {
                  tmp50 = typeof cause.getAttribute === "function";
                }
                flag = tmp50;
              } else {
                flag = true;
              }
            }
          }
          if (flag) {
            typeError1 = toLowerCase;
            const call41 = toLowerCase.call;
            typeError1 = globalThis;
            const _String5 = String;
            typeError1 = String(cause.nodeName);
            typeError1 = `<${typeof call41 === "unknown" ? tmp() : call41(tmp)}`;
            const arr11 = cause.attributes || [];
            let num34 = 0;
            str = " ";
            if (0 < arr11.length) {
              do {
                typeError1 = replace;
                let call42 = replace.call;
                let _String6 = String;
                typeError1 = ` ${arr11[num34].name}`;
                typeError1 = String(arr11[num34].value);
                typeError1 = /"/g;
                typeError1 = num34;
                str = obj.quoteStyle;
                typeError1 = typeof call42 === "unknown" ? typeError1(typeError1, "&quot;") : call42(typeError1, typeError1, "&quot;");
                if (!str) {
                  str = "double";
                }
                typeError1 = dependencyMap2;
                typeError1 = dependencyMap2[str];
                typeError1 = `${tmp}${tmp}=${tmp}${tmp}${tmp}`;
                num34 = num34 + 1;
              } while (num34 < arr11.length);
            }
            typeError1 = cause.childNodes && cause.childNodes.length;
            str = ">";
            typeError1 = `${tmp}>`;
            if (typeError1) {
              str = "...";
              typeError1 = `${tmp}>...`;
            }
            typeError1 = toLowerCase;
            const call43 = toLowerCase.call;
            const _String7 = String;
            typeError1 = String(cause.nodeName);
            str = "</";
            const _HermesInternal4 = HermesInternal;
            return typeError1 + "</" + (typeof call43 === "unknown" ? typeError1() : call43(typeError1)) + ">";
          } else {
            const call12 = toString.call;
            let tmp52 = "[object Array]" === (typeof call12 === "unknown" ? tmp51() : call12(cause));
            if (tmp52) {
              let tmp54 = !toStringTag;
              if (toStringTag) {
                let tmp55 = typeof cause === "object";
                if (typeof cause === "object") {
                  tmp55 = tmp53 in cause || undefined !== cause[tmp53];
                  const tmp56 = tmp53 in cause || undefined !== cause[tmp53];
                }
                tmp54 = !tmp55;
              }
              tmp52 = tmp54;
            }
            if (tmp52) {
              if (0 === cause.length) {
                return "[]";
              } else {
                typeError1 = arrObjKeys;
                const arr12 = arrObjKeys(cause, inspect);
                if (prev) {
                  let num31 = 0;
                  let flag2 = true;
                  if (0 < arr12.length) {
                    while (true) {
                      let arr10 = arr12[num31];
                      typeError1 = num31;
                      if (arr10.indexOf) {
                        let num33 = arr10.indexOf("\n");
                      } else {
                        let length2 = arr10.length;
                        let num32 = 0;
                        num33 = -1;
                        if (0 < length2) {
                          typeError1 = num32;
                          num33 = num32;
                          while (arr10[num32] !== "\n") {
                            typeError1 = num32 + 1;
                            num32 = typeError1;
                            num33 = -1;
                            if (typeError1 < length2) {
                              continue;
                            } else {
                              break;
                            }
                            break;
                          }
                        }
                      }
                      flag2 = false;
                      if (num33 >= 0) {
                        break;
                      } else {
                        typeError1 = num31 + 1;
                        num31 = typeError1;
                        flag2 = true;
                        if (typeError1 >= arr12.length) {
                          break;
                        }
                      }
                    }
                  }
                  if (!flag2) {
                    if (0 === arr12.length) {
                      typeError1 = globalThis;
                      const _HermesInternal3 = HermesInternal;
                      return "[" + "" + "]";
                    } else {
                      typeError1 = `
  ${tmp21.prev}${tmp21.base}`;
                      typeError1 = join;
                      const call39 = join.call;
                      typeError1 = `,${tmp}`;
                      prev = prev.prev;
                      typeError1 = `${tmp}${typeof call39 === "unknown" ? tmp(`,${tmp}`) : call39(arr12, `,${tmp}`)}
  ${tmp21}`;
                    }
                  }
                }
                typeError1 = join;
                const call40 = join.call;
                if (typeof call40 === "unknown") {
                  typeError1 = typeError1(", ");
                } else {
                  str = ", ";
                  typeError1 = call40(arr12, ", ");
                }
                typeError1 = `${"[ " + tmp} ]`;
              }
            } else {
              const call13 = tmp51.call;
              let tmp57 = "[object Error]" === (typeof call13 === "unknown" ? tmp51() : call13(cause));
              if (tmp57) {
                let tmp59 = !toStringTag;
                if (toStringTag) {
                  let tmp60 = typeof cause === "object";
                  if (typeof cause === "object") {
                    tmp60 = tmp58 in cause || undefined !== cause[tmp58];
                    const tmp61 = tmp58 in cause || undefined !== cause[tmp58];
                  }
                  tmp59 = !tmp60;
                }
                tmp57 = tmp59;
              }
              if (tmp57) {
                typeError1 = arrObjKeys;
                const arr9 = arrObjKeys(cause, inspect);
                let str75 = globalThis;
                const _Error = Error;
                if (!("cause" in Error.prototype)) {
                  if ("cause" in cause) {
                    typeError1 = propertyIsEnumerable;
                    const call35 = propertyIsEnumerable.call;
                    if (!(typeof call35 === "unknown" ? typeError1("cause") : call35(cause, "cause"))) {
                      const _String3 = String;
                      typeError1 = join;
                      const call36 = join.call;
                      typeError1 = concat;
                      const call37 = concat.call;
                      typeError1 = inspect_;
                      typeError1 = dependencyMap;
                      typeError1 = obj;
                      typeError1 = `{ [${String(cause)}`;
                      typeError1 = `[cause]: ${inspect_(cause.cause, obj, num6 + 1, closure_2)}`;
                      typeError1 = typeof call37 === "unknown" ? typeError1(arr9) : call37(`[cause]: ${inspect_(cause.cause, obj, num6 + 1, closure_2)}`, arr9);
                      if (typeof call36 === "unknown") {
                        typeError1 = typeError1(", ");
                      } else {
                        str = ", ";
                        typeError1 = call36(typeError1, ", ");
                      }
                      return typeError1 + "] " + typeError1 + " }";
                    }
                  }
                }
                if (0 === arr9.length) {
                  typeError1 = `[${str75.String(cause)}`;
                  str75 = "]";
                  typeError1 = `[${str75.String(cause)}]`;
                } else {
                  const _String4 = String;
                  typeError1 = join;
                  const call38 = join.call;
                  typeError1 = `{ [${String(cause)}`;
                  if (typeof call38 === "unknown") {
                    typeError1 = typeError1(", ");
                  } else {
                    str = ", ";
                    typeError1 = call38(arr9, ", ");
                  }
                  typeError1 = `${tmp + "] " + tmp} }`;
                }
              } else {
                if (typeof cause === "object") {
                  if (customInspect) {
                    if (custom) {
                      if (typeof cause[custom] === "function") {
                        typeError1 = _require;
                        typeError1 = dependencyMap;
                        if (_00576__) {
                          obj = { depth: null };
                          obj[0] = num5 - num7;
                          return typeError1(576)(cause, obj);
                        }
                      }
                    }
                    if ("symbol" !== customInspect) {
                      if (typeof cause.inspect === "function") {
                        return cause.inspect();
                      }
                    }
                  }
                }
                if ((function isMap(cause) {
                  if (obj) {
                    if (cause) {
                      if (typeof cause === "object") {
                        try {
                          const call = tmp.call;
                          if (typeof call === "unknown") {
                            tmp();
                          } else {
                            call(cause);
                          }
                          try {
                            let tmp4 = items1;
                            const call2 = items1.call;
                            if (typeof call2 === "unknown") {
                              tmp4();
                            } else {
                              call2(cause);
                            }
                            const _Map = Map;
                            tmp4 = cause instanceof Map;
                          } catch (err) {
                            return true;
                          }
                        } catch (err) {
                          return false;
                        }
                      }
                    }
                  }
                  return false;
                })(cause)) {
                  const items = [];
                  typeError1 = items;
                  if (items) {
                    const call31 = typeError1.call;
                    const fn2 = (arg0, arg1) => {
                      if (!closure_0) {
                        const obj = { depth: null };
                        obj[0] = obj.depth;
                        const call2 = outer1_35.call;
                        if (typeof call2 === "unknown") {
                          let call2Result = tmp7("quoteStyle");
                        } else {
                          call2Result = call2(tmp6, "quoteStyle");
                        }
                        if (call2Result) {
                          obj.quoteStyle = tmp6.quoteStyle;
                        }
                        if (!tmp3) {
                          tmp2(tmp14 + outer1_39(arg0, tmp6, tmp11 + 1, arr));
                        } else {
                          const call3 = outer1_21.call;
                          const arr2 = typeof call3 === "unknown" ? outer1_21() : call3(arr);
                          arr = arr2;
                          arr = arr2.push(tmp3);
                          const tmp15 = outer1_21;
                        }
                        tmp11 = c1;
                        tmp7 = outer1_35;
                      } else {
                        const call = outer1_21.call;
                        arr = typeof call === "unknown" ? outer1_21() : call(arr);
                        arr = arr.push(tmp3);
                        const tmp4 = outer1_21;
                      }
                    };
                    if (typeof call31 === "unknown") {
                      typeError1 = typeError1(fn2);
                    } else {
                      typeError1 = call31(cause, fn2);
                    }
                  }
                  typeError1 = obj;
                  const call32 = obj.call;
                  typeError1 = `Map (${typeof call32 === "unknown" ? tmp() : call32(cause)}`;
                  if (prev) {
                    if (0 === items.length) {
                      let str69 = "";
                    } else {
                      let prev3 = `
  ${tmp21.prev}${tmp21.base}`;
                      typeError1 = join;
                      const call34 = join.call;
                      typeError1 = `,${prev3}`;
                      typeError1 = prev3 + (typeof call34 === "unknown" ? typeError1(`,${prev3}`) : call34(items, `,${prev3}`));
                      prev3 = prev.prev;
                      typeError1 = `${tmp}
  ${prev3}`;
                    }
                  } else {
                    typeError1 = join;
                    const call33 = join.call;
                    if (typeof call33 === "unknown") {
                      str69 = typeError1(", ");
                    } else {
                      str = ", ";
                      str69 = call33(items, ", ");
                    }
                  }
                  return typeError1 + ") {" + str69 + "}";
                } else if ((function isSet(cause) {
                  if (items1) {
                    if (cause) {
                      if (typeof cause === "object") {
                        try {
                          const call = tmp.call;
                          if (typeof call === "unknown") {
                            tmp();
                          } else {
                            call(cause);
                          }
                          try {
                            let tmp4 = obj;
                            const call2 = obj.call;
                            if (typeof call2 === "unknown") {
                              tmp4();
                            } else {
                              call2(cause);
                            }
                            const _Set = Set;
                            tmp4 = cause instanceof Set;
                          } catch (err) {
                            return true;
                          }
                        } catch (err) {
                          return false;
                        }
                      }
                    }
                  }
                  return false;
                })(cause)) {
                  const items1 = [];
                  typeError1 = forEach2;
                  if (forEach2) {
                    const call27 = typeError1.call;
                    const fn = (arg0) => {
                      if (!closure_0) {
                        tmp2(outer1_39(arg0, obj, c1 + 1, arr));
                      } else {
                        const call = outer1_21.call;
                        arr = typeof call === "unknown" ? outer1_21() : call(arr);
                        arr = arr.push(tmp3);
                        const tmp4 = outer1_21;
                      }
                    };
                    if (typeof call27 === "unknown") {
                      typeError1 = typeError1(fn);
                    } else {
                      typeError1 = call27(cause, fn);
                    }
                  }
                  typeError1 = items1;
                  const call28 = items1.call;
                  typeError1 = `Set (${typeof call28 === "unknown" ? tmp() : call28(cause)}`;
                  if (prev) {
                    if (0 === items1.length) {
                      let str61 = "";
                    } else {
                      let prev2 = `
  ${tmp21.prev}${tmp21.base}`;
                      typeError1 = join;
                      const call30 = join.call;
                      typeError1 = `,${prev2}`;
                      typeError1 = prev2 + (typeof call30 === "unknown" ? typeError1(`,${prev2}`) : call30(items1, `,${prev2}`));
                      prev2 = prev.prev;
                      typeError1 = `${tmp}
  ${prev2}`;
                    }
                  } else {
                    typeError1 = join;
                    const call29 = join.call;
                    if (typeof call29 === "unknown") {
                      str61 = typeError1(", ");
                    } else {
                      str = ", ";
                      str61 = call29(items1, ", ");
                    }
                  }
                  return typeError1 + ") {" + str61 + "}";
                } else if ((function isWeakMap(cause) {
                  if (closure_7) {
                    if (cause) {
                      if (typeof cause === "object") {
                        try {
                          const call = tmp.call;
                          if (typeof call === "unknown") {
                            tmp(tmp);
                          } else {
                            call(cause, tmp);
                          }
                          try {
                            let tmp4 = closure_8;
                            const call2 = closure_8.call;
                            if (typeof call2 === "unknown") {
                              tmp4(tmp4);
                            } else {
                              call2(cause, tmp4);
                            }
                            const _WeakMap = WeakMap;
                            tmp4 = cause instanceof WeakMap;
                          } catch (err) {
                            return true;
                          }
                        } catch (err) {
                          return false;
                        }
                      }
                    }
                  }
                  return false;
                })(cause)) {
                  return "WeakMap { ? }";
                } else if ((function isWeakSet(cause) {
                  if (closure_8) {
                    if (cause) {
                      if (typeof cause === "object") {
                        try {
                          const call = tmp.call;
                          if (typeof call === "unknown") {
                            tmp(tmp);
                          } else {
                            call(cause, tmp);
                          }
                          try {
                            let tmp4 = closure_7;
                            const call2 = closure_7.call;
                            if (typeof call2 === "unknown") {
                              tmp4(tmp4);
                            } else {
                              call2(cause, tmp4);
                            }
                            const _WeakSet = WeakSet;
                            tmp4 = cause instanceof WeakSet;
                          } catch (err) {
                            return true;
                          }
                        } catch (err) {
                          return false;
                        }
                      }
                    }
                  }
                  return false;
                })(cause)) {
                  return "WeakSet { ? }";
                } else if ((function isWeakRef(cause) {
                  if (closure_9) {
                    if (cause) {
                      if (typeof cause === "object") {
                        try {
                          const call = tmp.call;
                          if (typeof call === "unknown") {
                            tmp();
                          } else {
                            call(cause);
                          }
                          return true;
                        } catch (err) {
                          return false;
                        }
                      }
                    }
                  }
                  return false;
                })(cause)) {
                  return "WeakRef { ? }";
                } else {
                  const call14 = tmp51.call;
                  let tmp62 = typeof cause === "object";
                  let tmp63 = "[object Number]" === (typeof call14 === "unknown" ? tmp51() : call14(cause));
                  if (tmp63) {
                    let tmp65 = !toStringTag;
                    if (toStringTag) {
                      let tmp66 = tmp62;
                      if (typeof cause === "object") {
                        tmp66 = tmp64 in cause || undefined !== cause[tmp64];
                        const tmp67 = tmp64 in cause || undefined !== cause[tmp64];
                      }
                      tmp65 = !tmp66;
                    }
                    tmp63 = tmp65;
                  }
                  if (tmp63) {
                    typeError1 = globalThis;
                    const _Number = Number;
                    typeError1 = inspect_;
                    typeError1 = dependencyMap;
                    typeError1 = obj;
                    return "Object(" + inspect_(Number(cause), obj, num6 + 1, dependencyMap) + ")";
                  } else if ((function isBigInt(cause) {
                    if (cause) {
                      if (typeof cause === "object") {
                        if (closure_23) {
                          try {
                            const call = tmp2.call;
                            if (typeof call === "unknown") {
                              tmp2();
                            } else {
                              call(cause);
                            }
                            return true;
                          } catch (err) {
                            return false;
                          }
                        }
                      }
                    }
                    return false;
                  })(cause)) {
                    typeError1 = valueOf;
                    const call26 = valueOf.call;
                    typeError1 = typeof call26 === "unknown" ? typeError1() : call26(cause);
                    typeError1 = inspect_;
                    typeError1 = dependencyMap;
                    typeError1 = obj;
                    return "Object(" + inspect_(typeError1, obj, num6 + 1, dependencyMap) + ")";
                  } else {
                    const call15 = tmp51.call;
                    let tmp68 = "[object Boolean]" === (typeof call15 === "unknown" ? tmp51() : call15(cause));
                    if (tmp68) {
                      let tmp70 = !toStringTag;
                      if (toStringTag) {
                        let tmp71 = tmp62;
                        if (typeof cause === "object") {
                          tmp71 = tmp69 in cause || undefined !== cause[tmp69];
                          const tmp72 = tmp69 in cause || undefined !== cause[tmp69];
                        }
                        tmp70 = !tmp71;
                      }
                      tmp68 = tmp70;
                    }
                    if (tmp68) {
                      typeError1 = valueOf;
                      const call25 = valueOf.call;
                      return "Object(" + (typeof call25 === "unknown" ? typeError1() : call25(cause)) + ")";
                    } else {
                      const call16 = tmp51.call;
                      let tmp73 = "[object String]" === (typeof call16 === "unknown" ? tmp51() : call16(cause));
                      if (tmp73) {
                        let tmp75 = !toStringTag;
                        if (toStringTag) {
                          let tmp76 = tmp62;
                          if (typeof cause === "object") {
                            tmp76 = tmp74 in cause || undefined !== cause[tmp74];
                            const tmp77 = tmp74 in cause || undefined !== cause[tmp74];
                          }
                          tmp75 = !tmp76;
                        }
                        tmp73 = tmp75;
                      }
                      if (tmp73) {
                        const _String2 = String;
                        typeError1 = inspect_;
                        typeError1 = dependencyMap;
                        typeError1 = obj;
                        return "Object(" + inspect_(String(cause), obj, num6 + 1, dependencyMap) + ")";
                      } else {
                        const _window = window;
                        if (typeof window !== "undefined") {
                          const _window2 = window;
                          if (cause === window) {
                            return "{ [object Window] }";
                          }
                        }
                        const _globalThis = globalThis;
                        if (typeof globalThis === "undefined") {
                          const call17 = tmp51.call;
                          let tmp79 = "[object Date]" === (typeof call17 === "unknown" ? tmp51() : call17(cause));
                          if (tmp79) {
                            let tmp81 = !toStringTag;
                            if (toStringTag) {
                              let tmp82 = tmp62;
                              if (typeof cause === "object") {
                                tmp82 = tmp80 in cause || undefined !== cause[tmp80];
                                const tmp83 = tmp80 in cause || undefined !== cause[tmp80];
                              }
                              tmp81 = !tmp82;
                            }
                            tmp79 = tmp81;
                          }
                          if (!tmp79) {
                            const call18 = tmp51.call;
                            let tmp84 = "[object RegExp]" === (typeof call18 === "unknown" ? tmp51() : call18(cause));
                            if (tmp84) {
                              let tmp86 = !toStringTag;
                              if (toStringTag) {
                                if (typeof cause === "object") {
                                  tmp62 = tmp85 in cause || undefined !== cause[tmp85];
                                  const tmp87 = tmp85 in cause || undefined !== cause[tmp85];
                                }
                                tmp86 = !tmp62;
                              }
                              tmp84 = tmp86;
                            }
                            if (!tmp84) {
                              const arr3 = arrObjKeys(cause, inspect);
                              if (getPrototypeOf) {
                                const _Object3 = Object;
                                let tmp89 = getPrototypeOf(cause) === Object.prototype;
                              } else {
                                const _Object = Object;
                                tmp89 = cause instanceof Object;
                                if (!tmp89) {
                                  const _Object2 = Object;
                                  tmp89 = cause.constructor === Object;
                                }
                              }
                              const _Object4 = Object;
                              let items2 = "null prototype";
                              if (cause instanceof Object) {
                                items2 = "";
                              }
                              if (!tmp89) {
                                if (toStringTag) {
                                  const _Object5 = Object;
                                  if (Object(cause) === cause) {
                                    if (tmp90 in cause) {
                                      const call19 = slice.call;
                                      const call20 = tmp51.call;
                                      if (typeof call19 === "unknown") {
                                        let call19Result = tmp91(8, -1);
                                      } else {
                                        call19Result = call19(tmp92, 8, -1);
                                      }
                                      tmp91 = slice;
                                      tmp92 = typeof call20 === "unknown" ? tmp51() : call20(cause);
                                    }
                                    let str31 = "";
                                    if (!tmp89) {
                                      str31 = "";
                                      if (typeof cause.constructor === "function") {
                                        let str33 = "";
                                        if (cause.constructor.name) {
                                          str33 = `${cause.constructor.name} `;
                                        }
                                        str31 = str33;
                                      }
                                    }
                                    if (!call19Result) {
                                      if (!items2) {
                                        const text1 = `${str31}`;
                                        if (0 === arr3.length) {
                                          typeError1 = `${str31}{}`;
                                        } else if (prev) {
                                          if (0 === arr3.length) {
                                            const _HermesInternal2 = HermesInternal;
                                            typeError1 = `${str31}` + "{" + "" + "}";
                                          } else {
                                            prev = `
  ${tmp21.prev}${tmp21.base}`;
                                            typeError1 = join;
                                            const call24 = join.call;
                                            typeError1 = `,${prev}`;
                                            typeError1 = prev + (typeof call24 === "unknown" ? typeError1(`,${prev}`) : call24(arr3, `,${prev}`));
                                            prev = prev.prev;
                                            typeError1 = `${tmp}
  ${prev}`;
                                          }
                                        } else {
                                          const call23 = join.call;
                                          if (typeof call23 === "unknown") {
                                            typeError1 = tmp99(", ");
                                          } else {
                                            str = ", ";
                                            typeError1 = call23(arr3, ", ");
                                          }
                                          typeError1 = `${tmp98 + "{ " + tmp} }`;
                                          tmp99 = join;
                                        }
                                        return typeError1;
                                      }
                                    }
                                    const call21 = join.call;
                                    const call22 = concat.call;
                                    if (!call19Result) {
                                      call19Result = [];
                                    }
                                    if (!items2) {
                                      items2 = [];
                                    }
                                    const items3 = [];
                                    if (typeof call21 === "unknown") {
                                      tmp93(": ");
                                    } else {
                                      str = ": ";
                                      call21(tmp95, ": ");
                                    }
                                    const text2 = `${"[" + tmp96}] `;
                                    tmp93 = join;
                                    const tmp94 = concat;
                                    tmp95 = typeof call22 === "unknown" ? concat(call19Result, items2) : call22(items3, call19Result, items2);
                                  }
                                }
                              }
                              let str29 = "";
                              if (items2) {
                                str29 = "Object";
                              }
                              call19Result = str29;
                            }
                          }
                          const _String = String;
                          return String(cause);
                        } else {
                          const _globalThis2 = globalThis;
                        }
                        return "{ [object globalThis] }";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
let closure_35 = Object.prototype.hasOwnProperty || (function(arg0) {
  return arg0 in this;
});

export default inspect_;