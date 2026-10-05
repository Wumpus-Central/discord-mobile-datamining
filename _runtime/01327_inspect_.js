// === Module 1327: inspect_ ===

// Module 1327 (inspect_)
import _mod1328 from "module_1328" /* 1328 */;

const require = globalThis.__r;
let _require, slice, toString, valueOf;

let getPrototypeOf;
function addNumericSeparator(callResult8, StringResult) {
  if (callResult8 !== Infinity) {
    if (callResult8 !== -Infinity) {
      if (callResult8 == callResult8) {
        if (!test.call(/e/, StringResult)) {
          const tmp = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if (typeof callResult8 === "number") {
            let tmp3;
            if (callResult8 < 0) {
              tmp3 = -floor(-callResult8);
            } else {
              tmp3 = floor(callResult8);
            }
            if (tmp3 !== callResult8) {
              const _String = String;
              StringResult = String(tmp3);
              const callResult = slice.call(StringResult, StringResult.length + 1);
              const text = `${replace.call(arr, tmp, "$&_")}.`;
              return `${replace.call(arr, tmp, "$&_")}.` + replace.call(replace.call(callResult, /([0-9]{3})/g, "$&_"), /_$/, "");
            }
          }
          return replace.call(StringResult, tmp, "$&_");
        }
      }
    }
  }
  return StringResult;
}
function isSymbol(custom) {
  if (closure_26) {
    let tmp2 = custom && typeof custom === "object";
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
            toString.call(custom);
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
function inspectString(callResult8, maxStringLength) {
  if (callResult8.length > maxStringLength.maxStringLength) {
    const diff = callResult8.length - maxStringLength.maxStringLength;
    let str3 = "";
    if (diff > 1) {
      str3 = "s";
    }
    const _HermesInternal = HermesInternal;
    const combined = `... ${tmp6}` + " more character" + str3;
    return inspectString(slice.call(callResult8, 0, maxStringLength.maxStringLength), maxStringLength) + combined;
  } else {
    merged[maxStringLength.quoteStyle || "single"].lastIndex = 0;
    let str2 = maxStringLength.quoteStyle;
    const callResult = replace.call(replace.call(callResult8, merged[maxStringLength.quoteStyle || "single"], "\\$1"), /[\x00-\x1f]/g, lowbyte);
    if (!str2) {
      str2 = "single";
    }
    return closure_32[str2] + callResult + closure_32[str2];
  }
}
function lowbyte(str) {
  let text;
  str = str.charCodeAt(0);
  const tmp = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[str];
  if (tmp) {
    text = `\\${tmp}`;
  } else {
    let str2 = "";
    if (str < 16) {
      str2 = "0";
    }
    const call = toUpperCase.call;
    text = `\\x${str2}${call(str.toString(16))}`;
  }
  return text;
}
function arrObjKeys(callResult8, inspect) {
  let items1;
  let length;
  let num;
  let tmp8;
  let tmp = "[object Array]" === toString.call(callResult8);
  if (tmp) {
    let tmp3 = !toStringTag1;
    if (toStringTag1) {
      let tmp4 = typeof callResult8 === "object";
      if (typeof callResult8 === "object") {
        tmp4 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
        const tmp5 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
      }
      tmp3 = !tmp4;
    }
    tmp = tmp3;
  }
  const items = [];
  if (tmp) {
    items.length = callResult8.length;
    for (let num = 0; num < callResult8.length; num = num + 1) {
      let str2 = "";
      if (closure_35.call(callResult8, num)) {
        str2 = inspect(callResult8[num], callResult8);
      }
      items[num] = str2;
    }
  }
  if (typeof getOwnPropertySymbols === "function") {
    items1 = tmp7(callResult8);
  } else {
    items1 = [];
  }
  if (closure_26) {
    const obj = {};
    num = 0;
    tmp8 = obj;
    if (0 < items1.length) {
      do {
        obj["$" + items1[num]] = items1[num];
        num = num + 1;
        tmp8 = obj;
        length = items1.length;
      } while (num < length);
    }
  }
  for (const key10048 in callResult8) {
    if (!closure_35.call(callResult8, key10048)) {
      continue;
    } else {
      let tmp9 = tmp;
      if (tmp9) {
        let _String = String;
        let _Number = Number;
        tmp9 = String(Number(key10048)) === key10048;
      }
      if (tmp9) {
        tmp9 = key10048 < callResult8.length;
      }
      if (!tmp9) {
        let tmp10 = closure_26;
        if (tmp10) {
          let _Symbol = Symbol;
          tmp10 = tmp8["$" + key10048] instanceof Symbol;
        }
        tmp9 = tmp10;
      }
      if (tmp9) {
        continue;
      } else {
        let push = items.push;
        if (test.call(/[^\w$]/, key10048)) {
          let text = `${inspect(key10048, callResult8)}: `;
          let arr = push(`${inspect(key10048, callResult8)}: ` + inspect(callResult8[key10048], callResult8));
          continue;
        } else {
          let text1 = `${key10048}: `;
          let arr4 = push(`${key10048}: ` + inspect(callResult8[key10048], callResult8));
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  if (typeof getOwnPropertySymbols === "function") {
    let num4;
    for (let num4 = 0; num4 < items1.length; num4 = num4 + 1) {
      if (propertyIsEnumerable.call(callResult8, items1[num4])) {
        let push2 = items.push;
        let text2 = `[${inspect(arr2[num4])}`;
        let push2Result = push2(`${`[${inspect(arr2[num4])}`}]: ${inspect(callResult8[arr2[num4]], callResult8)}`);
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
    let str = "size";
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
    let str2 = "size";
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
let toStringTag1 = null;
if (typeof Symbol === "function") {
  const _Symbol6 = Symbol;
  toStringTag1 = null;
  if (Symbol.toStringTag) {
    let _Symbol = Symbol;
    const _Symbol2 = Symbol;
    toStringTag1 = Symbol.toStringTag;
  }
}
if (typeof Reflect === "function") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
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
if (isSymbol(_mod1328.custom)) {
  custom = _mod1328.custom;
}
let closure_32 = Object.assign({ double: "\"", single: "'" });
const merged = Object.assign({ double: null, single: null });
merged[0] = /(["\\])/g;
merged[1] = /(['\\])/g;
function inspect_(callResult8, maxStringLength, arg2, callResult1) {
  let c1;
  function isMap(callResult8) {
    if (obj) {
      const tmp = callResult8;
      if (tmp) {
        if (typeof callResult8 === "object") {
          try {
            obj.call(callResult8);
            try {
              items1.call(callResult8);
              const _Map = Map;
              return callResult8 instanceof Map;
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
  }
  function isSet(callResult8) {
    if (items1) {
      const tmp = callResult8;
      if (tmp) {
        if (typeof callResult8 === "object") {
          try {
            items1.call(callResult8);
            try {
              items1.call(callResult8);
              const _Set = Set;
              return callResult8 instanceof Set;
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
  }
  function isWeakMap(callResult8) {
    if (has) {
      const tmp = callResult8;
      if (tmp) {
        if (typeof callResult8 === "object") {
          try {
            has.call(callResult8, has);
            try {
              has1.call(callResult8, has1);
              const _WeakMap = WeakMap;
              return callResult8 instanceof WeakMap;
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
  }
  function isWeakSet(callResult8) {
    if (has1) {
      const tmp = callResult8;
      if (tmp) {
        if (typeof callResult8 === "object") {
          try {
            has1.call(callResult8, has1);
            try {
              has.call(callResult8, has);
              const _WeakSet = WeakSet;
              return callResult8 instanceof WeakSet;
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
  }
  function isWeakRef(callResult8) {
    if (deref) {
      const tmp = callResult8;
      if (tmp) {
        if (typeof callResult8 === "object") {
          try {
            deref.call(callResult8);
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
    return false;
  }
  function isBigInt(callResult8) {
    const tmp = callResult8;
    if (tmp) {
      if (typeof callResult8 === "object") {
        if (valueOf) {
          try {
            valueOf.call(callResult8);
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
    return false;
  }
  let closure_0 = callResult8;
  let obj = maxStringLength;
  _require = arg2;
  if (!maxStringLength) {
    obj = {};
  }
  if (closure_35.call(obj, "quoteStyle")) {
    if (!closure_35.call(closure_32, obj.quoteStyle)) {
      let tmp = globalThis;
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
      let tmp3 = typeError;
      throw typeError;
    }
  }
  if (closure_35.call(obj, "maxStringLength")) {
    let tmp5;
    if (typeof obj.maxStringLength === "number") {
      let tmp4 = obj.maxStringLength < 0;
      if (tmp4) {
        tmp4 = obj.maxStringLength !== Infinity;
      }
      tmp5 = tmp4;
    } else {
      tmp5 = null !== obj.maxStringLength;
    }
    if (tmp5) {
      const _TypeError5 = TypeError;
      const self9 = this;
      const self10 = this;
      const typeError1 = new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
      throw typeError1;
    }
  }
  let callResult = closure_35.call(obj, "customInspect");
  let customInspect = !callResult;
  if (callResult) {
    customInspect = obj.customInspect;
  }
  if (typeof customInspect !== "boolean") {
    if ("symbol" !== customInspect) {
      const _TypeError4 = TypeError;
      const self7 = this;
      const self8 = this;
      const typeError2 = new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      throw typeError2;
    }
  }
  if (closure_35.call(obj, "indent")) {
    if (null !== obj.indent) {
      if ("\t" !== obj.indent) {
        const _parseInt = parseInt;
        const _TypeError2 = TypeError;
        const self3 = this;
        const self4 = this;
        const typeError3 = new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
        throw typeError3;
      }
    }
  }
  if (closure_35.call(obj, "numericSeparator")) {
    if (typeof obj.numericSeparator !== "boolean") {
      const _TypeError3 = TypeError;
      const self5 = this;
      const self6 = this;
      const typeError4 = new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
      throw typeError4;
    }
  }
  const numericSeparator = obj.numericSeparator;
  if (undefined === callResult8) {
    return "undefined";
  } else if (null === callResult8) {
    return "null";
  } else if (typeof callResult8 === "boolean") {
    let str93 = "false";
    if (callResult8) {
      str93 = "true";
    }
    return str93;
  } else if (typeof callResult8 === "string") {
    return inspectString(callResult8, obj);
  } else if (typeof callResult8 === "number") {
    if (0 === callResult8) {
      let str92 = "-0";
      if (0 < Infinity / callResult8) {
        str92 = "0";
      }
      return str92;
    } else {
      const _String11 = String;
      const StringResult = String(callResult8);
      let tmp145 = StringResult;
      if (numericSeparator) {
        tmp145 = addNumericSeparator(callResult8, StringResult);
      }
      return tmp145;
    }
  } else if (typeof callResult8 === "bigint") {
    const _String10 = String;
    let text = `${String(callResult8)}n`;
    let tmp141 = text;
    if (numericSeparator) {
      tmp141 = addNumericSeparator(callResult8, `${String(callResult8)}n`);
    }
    return tmp141;
  } else {
    let tmp11;
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
        if (typeof callResult8 === "object") {
          let tmp134 = "[object Array]" === toString.call(callResult8);
          if (tmp134) {
            let tmp136 = !toStringTag1;
            if (toStringTag1) {
              let tmp137 = typeof callResult8 === "object";
              if (typeof callResult8 === "object") {
                tmp137 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
              }
              tmp136 = !tmp137;
            }
            tmp134 = tmp136;
          }
          let str90 = "[Object]";
          if (tmp134) {
            str90 = "[Array]";
          }
          return str90;
        }
      }
    }
    let str4 = "\t";
    if ("\t" === obj.indent) {
      const _Array2 = Array;
      tmp11 = { base: str4, prev: join.call(Array(num7 + 1), `	`) };
      const obj3 = { base: str4, prev: join.call(Array(num7 + 1), `	`) };
    } else {
      tmp11 = null;
      if (typeof obj.indent === "number") {
        tmp11 = null;
        if (obj.indent > 0) {
          const _Array = Array;
          str4 = join.call(Array(obj.indent + 1), " ");
        }
      }
    }
    if (undefined === callResult1) {
      callResult1 = [];
    } else {
      let num15;
      if (callResult1.indexOf) {
        num15 = arr.indexOf(callResult8);
      } else {
        let num12 = 0;
        num15 = -1;
        if (0 < callResult1.length) {
          num15 = num12;
          while (callResult1[num12] !== callResult8) {
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
    function inspect(callResult8, arg1, arg2) {
      const tmp = arg1;
      if (tmp) {
        const callResult = slice.call(callResult1);
        callResult.push(arg1);
      }
      const tmp3 = arg2;
      if (tmp3) {
        obj = { depth: obj.depth };
        if (closure_35.call(obj, "quoteStyle")) {
          obj.quoteStyle = obj.quoteStyle;
        }
        return inspect_(callResult8, obj, c1 + 1, callResult1);
      } else {
        return inspect_(callResult8, obj, c1 + 1, callResult1);
      }
    }
    if (typeof callResult8 === "function") {
      let tmp18 = "[object RegExp]" === toString.call(callResult8);
      if (tmp18) {
        let tmp20 = !toStringTag1;
        if (toStringTag1) {
          let tmp21 = typeof callResult8 === "object";
          if (typeof callResult8 === "object") {
            tmp21 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
          }
          tmp20 = !tmp21;
        }
        tmp18 = tmp20;
      }
      if (!tmp18) {
        let name;
        if (callResult8.name) {
          name = callResult8.name;
        } else {
          callResult1 = match.call(toString.call(callResult8), /^function\s*([\w$]+)/);
          name = null;
          if (callResult1) {
            name = callResult1[1];
          }
        }
        const arr2 = arrObjKeys(callResult8, inspect);
        let str7 = " (anonymous)";
        if (name) {
          str7 = `: ${tmp25}`;
        }
        let str9 = "";
        if (arr2.length > 0) {
          str9 = `${" { " + join.call(arr2, ", ")} }`;
        }
        const _HermesInternal = HermesInternal;
        return "[Function" + str7 + "]" + str9;
      }
    }
    if (isSymbol(callResult8)) {
      let callResult2;
      if (closure_26) {
        const _String9 = String;
        callResult2 = replace.call(String(callResult8), /^(Symbol\(.*\))_[^)]*$/, "$1");
      } else {
        callResult2 = toString.call(callResult8);
      }
      let text1 = callResult2;
      if (typeof callResult8 === "object") {
        text1 = callResult2;
        if (!closure_26) {
          text1 = `${"Object(" + tmp130})`;
        }
      }
      return text1;
    } else {
      let flag = false;
      if (callResult8) {
        flag = false;
        if (typeof callResult8 === "object") {
          if (typeof globalThis.HTMLElement === "undefined") {
            const nodeName = callResult8.nodeName;
            let tmp29 = typeof nodeName === "string";
            if (typeof nodeName === "string") {
              tmp29 = typeof callResult8.getAttribute === "function";
            }
            flag = tmp29;
          } else {
            const HTMLElement2 = globalThis.HTMLElement;
            flag = true;
          }
        }
      }
      if (flag) {
        const _String6 = String;
        const call5 = toLowerCase.call;
        const text2 = `<${call5(String(callResult8.nodeName))}`;
        const arr10 = callResult8.attributes || [];
        let num32 = 0;
        let text4 = text2;
        let tmp117 = text2;
        if (0 < arr10.length) {
          do {
            let _String7 = String;
            let text3 = ` ${arr10[num32].name}`;
            let str83 = obj.quoteStyle;
            let callResult3 = replace.call(String(arr10[num32].value), /"/g, "&quot;");
            if (!str83) {
              str83 = "double";
            }
            let tmp124 = closure_32[str83];
            text4 = `${tmp116}${tmp118}=${tmp124}${tmp122}${tmp124}`;
            num32 = num32 + 1;
            tmp117 = text4;
          } while (num32 < arr10.length);
        }
        const text5 = `${tmp117}>`;
        let text6 = text5;
        const tmp125 = callResult8.childNodes && callResult8.childNodes.length;
        if (tmp125) {
          text6 = `${tmp117}>...`;
        }
        const _String8 = String;
        const _HermesInternal4 = HermesInternal;
        return text6 + "</" + toLowerCase.call(String(callResult8.nodeName)) + ">";
      } else {
        let tmp30 = "[object Array]" === toString.call(callResult8);
        if (tmp30) {
          let tmp32 = !toStringTag1;
          if (toStringTag1) {
            let tmp33 = typeof callResult8 === "object";
            if (typeof callResult8 === "object") {
              tmp33 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
            }
            tmp32 = !tmp33;
          }
          tmp30 = tmp32;
        }
        if (tmp30) {
          if (0 === callResult8.length) {
            return "[]";
          } else {
            const arr11 = arrObjKeys(callResult8, inspect);
            if (tmp11) {
              let combined;
              let num29 = 0;
              let flag2 = true;
              if (0 < arr11.length) {
                while (true) {
                  let num31;
                  let arr9 = arr11[num29];
                  if (arr9.indexOf) {
                    num31 = arr9.indexOf("\n");
                  } else {
                    let length2 = arr9.length;
                    let num30 = 0;
                    num31 = -1;
                    if (0 < length2) {
                      num31 = num30;
                      while (arr9[num30] !== "\n") {
                        let sum1 = num30 + 1;
                        num30 = sum1;
                        num31 = -1;
                        if (sum1 < length2) {
                          continue;
                        } else {
                          break;
                        }
                        break;
                      }
                    }
                  }
                  flag2 = false;
                  if (num31 >= 0) {
                    break;
                  } else {
                    let sum2 = num29 + 1;
                    num29 = sum2;
                    flag2 = true;
                    if (sum2 >= arr11.length) {
                      break;
                    }
                  }
                }
              }
              if (!flag2) {
                let str71 = "";
                if (0 !== arr11.length) {
                  const text7 = `
  ${tmp11.prev}${tmp11.base}`;
                  str71 = `${tmp110}${join.call(arr11, "," + tmp110)}
  ${tmp11.prev}`;
                }
                const _HermesInternal3 = HermesInternal;
                combined = "[" + str71 + "]";
              }
              return combined;
            }
            combined = `${"[ " + join.call(arr11, ", ")} ]`;
          }
        } else {
          let tmp35 = "[object Error]" === toString.call(callResult8);
          if (tmp35) {
            let tmp37 = !toStringTag1;
            if (toStringTag1) {
              let tmp38 = typeof callResult8 === "object";
              if (typeof callResult8 === "object") {
                tmp38 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
              }
              tmp37 = !tmp38;
            }
            tmp35 = tmp37;
          }
          if (tmp35) {
            let text10;
            const arr8 = arrObjKeys(callResult8, inspect);
            const _Error = Error;
            if (!("cause" in Error.prototype)) {
              if ("cause" in callResult8) {
                let text9;
                if (!propertyIsEnumerable.call(callResult8, "cause")) {
                  const _String3 = String;
                  const text8 = `{ [${String(callResult8)}`;
                  const call3 = join.call;
                  const call4 = concat.call;
                  text9 = `${`{ [${String(callResult8)}` + "] " + call3(call4("[cause]: " + inspect_(callResult8.cause, obj, num6 + 1, callResult1), arr8), ", ")} }`;
                }
                return text9;
              }
            }
            if (0 === arr8.length) {
              const _String5 = String;
              text10 = `${"[" + String(callResult8)}]`;
            } else {
              const _String4 = String;
              const text11 = `{ [${String(callResult8)}`;
              text10 = `${`{ [${String(callResult8)}` + "] " + join.call(arr8, ", ")} }`;
            }
            text9 = text10;
          } else {
            if (typeof callResult8 === "object") {
              if (customInspect) {
                if (custom) {
                  if (typeof callResult8[custom] === "function") {
                    const tmp160 = _require;
                    const tmp161 = callResult1;
                    if (require("module_1328")) {
                      const obj7 = { depth: num5 - num7 };
                      return tmp160(tmp161[0])(callResult8, obj7);
                    }
                  }
                }
                if ("symbol" !== customInspect) {
                  if (typeof callResult8.inspect === "function") {
                    return callResult8.inspect();
                  }
                }
              }
            }
            if (isMap(callResult8)) {
              let callResult5;
              const items = [];
              if (items) {
                items.call(callResult8, (callResult8, callResult82) => {
                  const push = items.push;
                  if (closure_0) {
                    const callResult = slice.call(callResult1);
                    callResult1 = callResult;
                    callResult.push(closure_0);
                  }
                  obj = { depth: obj.depth };
                  if (closure_35.call(obj, "quoteStyle")) {
                    obj.quoteStyle = obj.quoteStyle;
                  }
                  const text = `${inspect_(callResult8, obj, c1 + 1, callResult1)} => `;
                  if (closure_0) {
                    callResult1 = slice.call(callResult1);
                    callResult1.push(closure_0);
                  }
                  push(text + inspect_(callResult8, obj, c1 + 1, callResult1));
                });
              }
              const text12 = `Map (${obj.call(callResult8)}`;
              if (tmp11) {
                let str55 = "";
                if (0 !== items.length) {
                  const text13 = `
  ${tmp11.prev}${tmp11.base}`;
                  str55 = `${tmp94}${join.call(arr7, "," + tmp94)}
  ${tmp11.prev}`;
                }
                callResult5 = str55;
              } else {
                callResult5 = join.call(items, ", ");
              }
              return text12 + ") {" + callResult5 + "}";
            } else if (isSet(callResult8)) {
              let callResult7;
              const items1 = [];
              if (forEach2) {
                forEach2.call(callResult8, (callResult8) => {
                  const push = items1.push;
                  if (closure_0) {
                    const callResult = slice.call(callResult1);
                    callResult.push(tmp2);
                  }
                  push(inspect_(callResult8, obj, c1 + 1, callResult1));
                });
              }
              const text14 = `Set (${items1.call(callResult8)}`;
              if (tmp11) {
                let str49 = "";
                if (0 !== items1.length) {
                  const text15 = `
  ${tmp11.prev}${tmp11.base}`;
                  str49 = `${tmp91}${join.call(arr6, "," + tmp91)}
  ${tmp11.prev}`;
                }
                callResult7 = str49;
              } else {
                callResult7 = join.call(items1, ", ");
              }
              return text14 + ") {" + callResult7 + "}";
            } else if (isWeakMap(callResult8)) {
              return "WeakMap { ? }";
            } else if (isWeakSet(callResult8)) {
              return "WeakSet { ? }";
            } else if (isWeakRef(callResult8)) {
              return "WeakRef { ? }";
            } else {
              let tmp40 = typeof callResult8 === "object";
              let tmp41 = "[object Number]" === toString.call(callResult8);
              if (tmp41) {
                let tmp43 = !toStringTag1;
                if (toStringTag1) {
                  let tmp44 = tmp40;
                  if (typeof callResult8 === "object") {
                    tmp44 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
                  }
                  tmp43 = !tmp44;
                }
                tmp41 = tmp43;
              }
              if (tmp41) {
                const _Number = Number;
                return "Object(" + inspect_(Number(callResult8), obj, num6 + 1, callResult1) + ")";
              } else if (isBigInt(callResult8)) {
                callResult8 = valueOf.call(callResult8);
                return "Object(" + inspect_(callResult8, obj, num6 + 1, callResult1) + ")";
              } else {
                let tmp46 = "[object Boolean]" === toString.call(callResult8);
                if (tmp46) {
                  let tmp48 = !toStringTag1;
                  if (toStringTag1) {
                    let tmp49 = tmp40;
                    if (typeof callResult8 === "object") {
                      tmp49 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
                    }
                    tmp48 = !tmp49;
                  }
                  tmp46 = tmp48;
                }
                if (tmp46) {
                  return "Object(" + valueOf.call(callResult8) + ")";
                } else {
                  let tmp51 = "[object String]" === toString.call(callResult8);
                  if (tmp51) {
                    let tmp53 = !toStringTag1;
                    if (toStringTag1) {
                      let tmp54 = tmp40;
                      if (typeof callResult8 === "object") {
                        tmp54 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
                      }
                      tmp53 = !tmp54;
                    }
                    tmp51 = tmp53;
                  }
                  if (tmp51) {
                    const _String2 = String;
                    return "Object(" + inspect_(String(callResult8), obj, num6 + 1, callResult1) + ")";
                  } else {
                    const _window = window;
                    if (typeof window !== "undefined") {
                      const _window2 = window;
                      if (callResult8 === window) {
                        return "{ [object Window] }";
                      }
                    }
                    const _globalThis = globalThis;
                    if (typeof globalThis === "undefined") {
                      let tmp57 = "[object Date]" === toString.call(callResult8);
                      if (tmp57) {
                        let tmp59 = !toStringTag1;
                        if (toStringTag1) {
                          let tmp60 = tmp40;
                          if (typeof callResult8 === "object") {
                            tmp60 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
                          }
                          tmp59 = !tmp60;
                        }
                        tmp57 = tmp59;
                      }
                      if (!tmp57) {
                        let tmp62 = "[object RegExp]" === toString.call(callResult8);
                        if (tmp62) {
                          let tmp64 = !toStringTag1;
                          if (toStringTag1) {
                            if (typeof callResult8 === "object") {
                              tmp40 = toStringTag1 in callResult8 || undefined !== callResult8[toStringTag1];
                            }
                            tmp64 = !tmp40;
                          }
                          tmp62 = tmp64;
                        }
                        if (!tmp62) {
                          let tmp67;
                          const arr3 = arrObjKeys(callResult8, inspect);
                          if (getPrototypeOf) {
                            const _Object3 = Object;
                            tmp67 = getPrototypeOf(callResult8) === Object.prototype;
                          } else {
                            const _Object = Object;
                            tmp67 = callResult8 instanceof Object;
                            if (!tmp67) {
                              const _Object2 = Object;
                              tmp67 = callResult8.constructor === Object;
                            }
                          }
                          const _Object4 = Object;
                          let items2 = "null prototype";
                          if (callResult8 instanceof Object) {
                            items2 = "";
                          }
                          if (!tmp67) {
                            if (toStringTag1) {
                              const _Object5 = Object;
                              if (Object(callResult8) === callResult8) {
                                let callResult9;
                                let text17;
                                let text18;
                                if (tmp68 in callResult8) {
                                  callResult9 = slice.call(toString.call(callResult8), 8, -1);
                                }
                                let str23 = "";
                                let str24 = "";
                                if (!tmp67) {
                                  str24 = str23;
                                  if (typeof callResult8.constructor === "function") {
                                    let text16 = str23;
                                    if (callResult8.constructor.name) {
                                      text16 = `${callResult8.constructor.name} `;
                                    }
                                    str24 = text16;
                                  }
                                }
                                if (callResult9) {
                                  const call = join.call;
                                  const call2 = concat.call;
                                  if (!callResult9) {
                                    callResult9 = [];
                                  }
                                  if (!items2) {
                                    items2 = [];
                                  }
                                  text17 = `${"[" + call(call2([], arr5, arr4), ": ")}] `;
                                } else {
                                  text17 = str23;
                                }
                                const sum3 = str24 + text17;
                                if (0 === arr3.length) {
                                  text18 = `${tmp74}{}`;
                                } else if (tmp11) {
                                  if (0 !== arr3.length) {
                                    const text19 = `
  ${tmp11.prev}${tmp11.base}`;
                                    str23 = `${tmp76}${join.call(arr3, "," + tmp76)}
  ${tmp11.prev}`;
                                  }
                                  const _HermesInternal2 = HermesInternal;
                                  text18 = sum3 + "{" + str23 + "}";
                                } else {
                                  text18 = `${tmp74 + "{ " + join.call(arr3, ", ")} }`;
                                }
                                return text18;
                              }
                            }
                          }
                          let str22 = "";
                          if (items2) {
                            str22 = "Object";
                          }
                          callResult9 = str22;
                        }
                      }
                      const _String = String;
                      return String(callResult8);
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
let closure_35 = Object.prototype.hasOwnProperty || (function(arg0) {
  return arg0 in this;
});

export default inspect_;