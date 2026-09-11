// === Module 1282: ? ===

// Module 1282
import _mod1283 from "module_1283" /* 1283 */;
import _mod1284 from "module_1284" /* 1284 */;
import _Symbol6 from "_Symbol" /* 1286 */;
import _mod1288 from "module_1288" /* 1288 */;
import _mod1289 from "module_1289" /* 1289 */;
import _mod1290 from "module_1290" /* 1290 */;
import _mod1291 from "module_1291" /* 1291 */;
import _mod1300 from "module_1300" /* 1300 */;
import _mod1301 from "module_1301" /* 1301 */;
import _mod1302 from "module_1302" /* 1302 */;
import _mod1303 from "module_1303" /* 1303 */;
import _mod1304 from "module_1304" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import flag4 from "flag" /* 1306 */;
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod1309 from "module_1309" /* 1309 */;
import _mod1310 from "module_1310" /* 1310 */;
import _mod1311 from "module_1311" /* 1311 */;
import _mod1312 from "module_1312" /* 1312 */;
import sign from "sign" /* 1313 */;
import bind from "bind" /* 1296 */;
import module_1298 from "module_1298" /* 1298 */;
import module_1299 from "module_1299" /* 1299 */;

function getEvalledConstructor(arg0) {
  try {
    const _HermesInternal = HermesInternal;
    return Function("\"use strict\"; return (" + arg0 + ").constructor;")();
  } catch (err) {
  }
}
function throwTypeError() {
  throw new _mod1283();
}
if (_mod1284) {
  throwTypeError = (() => {
    try {
      return throwTypeError;
    } catch (err) {
      try {
        return _mod1284(arguments, "callee").get;
      } catch (err) {
        return throwTypeError;
      }
    }
  })();
}
const tmp5 = _Symbol6();
const obj = {};
let tmp6;
if (typeof Uint8Array !== "undefined") {
  if (_mod1288) {
    let _Uint8Array = Uint8Array;
    tmp6 = _mod1288(Uint8Array);
  }
}
let AggregateError;
if (typeof globalThis.AggregateError !== "undefined") {
  AggregateError = globalThis.AggregateError;
}
const merged = Object.assign({ "%AggregateError%": null, "%Array%": null, "%ArrayBuffer%": null, "%ArrayIteratorPrototype%": null, "%AsyncFromSyncIteratorPrototype%": "fill", "%AsyncFunction%": "\u043D\u0435\u0440\u0432\u0435\u043D", "%AsyncGenerator%": "\u043D\u0435\u0440\u0432\u043D\u043E\u0441\u0442", "%AsyncGeneratorFunction%": "\u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E", "%AsyncIteratorPrototype%": "\u043F\u0440\u0435\u0445\u0430\u043F\u0430\u043D\u0430 \u0443\u0441\u0442\u043D\u0430", "%Atomics%": "\u043F\u0440\u0438\u0442\u0435\u0441\u043D\u0435\u043D\u0438\u0435", "%BigInt%": "\u0441\u0435\u043A\u0441\u0438", "%BigInt64Array%": "\u0441\u0442\u0440\u0430\u0445", "%BigUint64Array%": "\u0443\u0441\u0442\u043D\u0430", "%Boolean%": "\u0444\u043B\u0438\u0440\u0442", "%DataView%": "\u0444\u043B\u0438\u0440\u0442\u0443\u0432\u0430\u043D\u0435", "%Date%": "\u0446\u0435\u043B\u0443\u0432\u043A\u0430", "%decodeURI%": "person_biking_tone3", "%decodeURIComponent%": "bicyclist_tone3", "%encodeURI%": 0.667, "%encodeURIComponent%": 0.667, "%Error%": 0.667, "%eval%": "ArrayBuffer", "%EvalError%": "prototype", "%Float16Array%": "EEEE, d MMMM y", "%Float32Array%": "d MMMM y", "%Float64Array%": "d MMM y", "%FinalizationRegistry%": "d/M/yy", "%Function%": "<string:625258948>", "%GeneratorFunction%": "<string:419430832>", "%Int8Array%": "<string:654311724>", "%Int16Array%": "<string:2483028555>", "%Int32Array%": "<string:3321889107>", "%isFinite%": "<string:1090552832>", "%isNaN%": "DEVELOPER_OPTIONS_SET_ROUTING_KEY", "%IteratorPrototype%": "<string:1407729921>", "%JSON%": "<string:12976129>", "%Map%": "<string:2505113758>", "%MapIteratorPrototype%": "8 Control", "%Math%": "<string:1359020032>", "%Number%": "<string:3544292142>", "%Object%": "<string:3321889107>", "%Object.getOwnPropertyDescriptor%": "<string:1090583040>", "%parseFloat%": "AsyncFunction", "%parseInt%": "<string:1090569809>", "%Promise%": "AsyncGeneratorFunction", "%Proxy%": "<string:1090569809>", "%RangeError%": "AsyncGeneratorFunction", "%ReferenceError%": "<string:3321939538>", "%Reflect%": "<string:348672>", "%RegExp%": "<string:2471624902>", "%Set%": "<string:1375782469>", "%SetIteratorPrototype%": "<string:12976140>", "%SharedArrayBuffer%": "<string:3321892434>", "%String%": "<string:1266242048>", "%StringIteratorPrototype%": "<string:1766981830>", "%Symbol%": "<string:1375782480>", "%SyntaxError%": "<string:12996716>", "%ThrowTypeError%": "<string:3322371154>", "%TypedArray%": "<string:135086336>", "%TypeError%": "<string:3327197185>", "%Uint8Array%": "<string:135086336>", "%Uint8ClampedArray%": "<string:3327262721>", "%Uint16Array%": "<string:1375782400>", "%Uint32Array%": "<string:13000541>", "%URIError%": "<string:3328136018>", "%WeakMap%": "<string:1599492608>", "%WeakRef%": "<string:122814662>", "%WeakSet%": "<string:1384700000>", "%Function.prototype.call%": "<string:459694087>", "%Function.prototype.apply%": "<string:3321895762>", "%Object.defineProperty%": "<string:1987072>", "%Object.getPrototypeOf%": "<string:525467846>", "%Math.abs%": "<string:1090569728>", "%Math.floor%": "bamboe", "%Math.max%": "<string:1143321425>", "%Math.min%": "dennenboomversiering", "%Math.pow%": "dennentakdecoratie", "%Math.round%": "feest", "%Math.sign%": "japans", "%Reflect.getPrototypeOf%": "<string:525598545>" });
merged[0] = AggregateError;
merged[1] = Array;
let _ArrayBuffer;
if (typeof ArrayBuffer !== "undefined") {
  _ArrayBuffer = ArrayBuffer;
}
merged[2] = _ArrayBuffer;
let _moduleResult;
if (tmp5) {
  if (_mod1288) {
    let items = [];
    let _Symbol = Symbol;
    const _module = _mod1288;
    _moduleResult = _module(items[Symbol.iterator]());
  }
}
merged[3] = _moduleResult;
merged[5] = obj;
merged[6] = obj;
merged[7] = obj;
merged[8] = obj;
let _Atomics;
if (typeof Atomics !== "undefined") {
  _Atomics = Atomics;
}
merged[9] = _Atomics;
let _BigInt;
if (typeof BigInt !== "undefined") {
  _BigInt = BigInt;
}
merged[10] = _BigInt;
let _BigInt64Array;
if (typeof BigInt64Array !== "undefined") {
  _BigInt64Array = BigInt64Array;
}
merged[11] = _BigInt64Array;
let _BigUint64Array;
if (typeof BigUint64Array !== "undefined") {
  _BigUint64Array = BigUint64Array;
}
merged[12] = _BigUint64Array;
merged[13] = Boolean;
let _DataView;
if (typeof DataView !== "undefined") {
  _DataView = DataView;
}
merged[14] = _DataView;
merged[15] = Date;
merged[16] = decodeURI;
merged[17] = decodeURIComponent;
merged[18] = encodeURI;
merged[19] = encodeURIComponent;
merged[20] = _mod1300;
merged[21] = globalThis.eval;
merged[22] = _mod1301;
let Float16Array;
if (typeof globalThis.Float16Array !== "undefined") {
  Float16Array = globalThis.Float16Array;
}
merged[23] = Float16Array;
let _Float32Array;
if (typeof Float32Array !== "undefined") {
  _Float32Array = Float32Array;
}
merged[24] = _Float32Array;
let _Float64Array;
if (typeof Float64Array !== "undefined") {
  _Float64Array = Float64Array;
}
merged[25] = _Float64Array;
let FinalizationRegistry;
if (typeof globalThis.FinalizationRegistry !== "undefined") {
  FinalizationRegistry = globalThis.FinalizationRegistry;
}
merged[26] = FinalizationRegistry;
merged[27] = Function;
merged[28] = obj;
let _Int8Array;
if (typeof Int8Array !== "undefined") {
  _Int8Array = Int8Array;
}
merged[29] = _Int8Array;
let _Int16Array;
if (typeof Int16Array !== "undefined") {
  _Int16Array = Int16Array;
}
merged[30] = _Int16Array;
let _Int32Array;
if (typeof Int32Array !== "undefined") {
  _Int32Array = Int32Array;
}
merged[31] = _Int32Array;
merged[32] = isFinite;
merged[33] = isNaN;
let _module1Result;
if (tmp5) {
  if (_mod1288) {
    const _module1 = _mod1288;
    const items1 = [];
    const _Symbol2 = Symbol;
    const _module2 = _mod1288;
    _module1Result = _module1(_module2(items1[Symbol.iterator]()));
  }
}
merged[34] = _module1Result;
let _JSON;
if (typeof JSON === "object") {
  _JSON = JSON;
}
merged[35] = _JSON;
let _Map;
if (typeof Map !== "undefined") {
  _Map = Map;
}
merged[36] = _Map;
let _module3Result;
if (typeof Map !== "undefined") {
  if (tmp5) {
    if (_mod1288) {
      _Map = Map;
      const _module3 = _mod1288;
      const map = new Map();
      const _Symbol3 = Symbol;
      _module3Result = _module3(map[Symbol.iterator]());
    }
  }
}
merged[37] = _module3Result;
merged[38] = Math;
merged[39] = Number;
merged[40] = _mod1291;
merged[41] = _mod1284;
merged[42] = parseFloat;
merged[43] = parseInt;
let _Promise;
if (typeof Promise !== "undefined") {
  _Promise = Promise;
}
merged[44] = _Promise;
let _Proxy;
if (typeof Proxy !== "undefined") {
  _Proxy = Proxy;
}
merged[45] = _Proxy;
merged[46] = _mod1302;
merged[47] = _mod1303;
let _Reflect;
if (typeof Reflect !== "undefined") {
  _Reflect = Reflect;
}
merged[48] = _Reflect;
merged[49] = RegExp;
let _Set;
if (typeof Set !== "undefined") {
  _Set = Set;
}
merged[50] = _Set;
let _module4Result;
if (typeof Set !== "undefined") {
  if (tmp5) {
    if (_mod1288) {
      _Set = Set;
      const _module4 = _mod1288;
      const set = new Set();
      const _Symbol4 = Symbol;
      _module4Result = _module4(set[Symbol.iterator]());
    }
  }
}
merged[51] = _module4Result;
let _SharedArrayBuffer;
if (typeof SharedArrayBuffer !== "undefined") {
  _SharedArrayBuffer = SharedArrayBuffer;
}
merged[52] = _SharedArrayBuffer;
merged[53] = String;
let _module5Result;
if (tmp5) {
  if (_mod1288) {
    const _Symbol5 = Symbol;
    const _module5 = _mod1288;
    _module5Result = _module5(""[Symbol.iterator]());
  }
}
merged[54] = _module5Result;
_Symbol = undefined;
if (tmp5) {
  _Symbol = Symbol;
}
merged[55] = _Symbol;
merged[56] = _mod1304;
merged[57] = throwTypeError;
merged[58] = tmp6;
merged[59] = _mod1283;
_Uint8Array = undefined;
if (typeof Uint8Array !== "undefined") {
  _Uint8Array = Uint8Array;
}
merged[60] = _Uint8Array;
let _Uint8ClampedArray;
if (typeof Uint8ClampedArray !== "undefined") {
  _Uint8ClampedArray = Uint8ClampedArray;
}
merged[61] = _Uint8ClampedArray;
let _Uint16Array;
if (typeof Uint16Array !== "undefined") {
  _Uint16Array = Uint16Array;
}
merged[62] = _Uint16Array;
let _Uint32Array;
if (typeof Uint32Array !== "undefined") {
  _Uint32Array = Uint32Array;
}
merged[63] = _Uint32Array;
merged[64] = _mod1305;
let _WeakMap;
if (typeof WeakMap !== "undefined") {
  _WeakMap = WeakMap;
}
merged[65] = _WeakMap;
let _WeakRef;
if (typeof WeakRef !== "undefined") {
  _WeakRef = WeakRef;
}
merged[66] = _WeakRef;
let _WeakSet;
if (typeof WeakSet !== "undefined") {
  _WeakSet = WeakSet;
}
merged[67] = _WeakSet;
merged[68] = module_1298;
merged[69] = module_1299;
merged[70] = flag4;
merged[71] = _mod1290;
merged[72] = _mod1307;
merged[73] = _mod1308;
merged[74] = _mod1309;
merged[75] = _mod1310;
merged[76] = _mod1311;
merged[77] = _mod1312;
merged[78] = sign;
merged[79] = _mod1289;
if (_mod1288) {
  try {
    const error = null.error;
  } catch (tmp56) {
    tmp4["%Error.prototype%"] = tmp3(tmp2[3])(tmp3(tmp2[3])(tmp56));
    const tmp3Result = tmp3(tmp2[3]);
  }
}
function doEval(arg0) {
  if ("%AsyncFunction%" === arg0) {
    let prototype = getEvalledConstructor("async function () {}");
  } else if ("%GeneratorFunction%" === arg0) {
    prototype = getEvalledConstructor("function* () {}");
  } else if ("%AsyncGeneratorFunction%" === arg0) {
    prototype = getEvalledConstructor("async function* () {}");
  } else if ("%AsyncGenerator%" === arg0) {
    const tmp7 = doEval("%AsyncGeneratorFunction%");
    if (tmp7) {
      prototype = tmp7.prototype;
    }
  } else if ("%AsyncIteratorPrototype%" === arg0) {
    const tmp12 = doEval("%AsyncGenerator%");
    let tmp3 = tmp12;
    if (tmp12) {
      tmp3 = _mod1288;
    }
    if (tmp3) {
      prototype = _mod1288(tmp12.prototype);
    }
  }
  merged[arg0] = prototype;
  return prototype;
}
const merged1 = Object.assign({ "%ArrayBufferPrototype%": null, "%ArrayPrototype%": null, "%ArrayProto_entries%": null, "%ArrayProto_forEach%": null, "%ArrayProto_keys%": null, "%ArrayProto_values%": null, "%AsyncFunctionPrototype%": null, "%AsyncGenerator%": null, "%AsyncGeneratorPrototype%": null, "%BooleanPrototype%": null, "%DataViewPrototype%": null, "%DatePrototype%": null, "%ErrorPrototype%": null, "%EvalErrorPrototype%": null, "%Float32ArrayPrototype%": null, "%Float64ArrayPrototype%": null, "%FunctionPrototype%": null, "%Generator%": null, "%GeneratorPrototype%": null, "%Int8ArrayPrototype%": null, "%Int16ArrayPrototype%": null, "%Int32ArrayPrototype%": null, "%JSONParse%": null, "%JSONStringify%": null, "%MapPrototype%": null, "%NumberPrototype%": null, "%ObjectPrototype%": null, "%ObjProto_toString%": null, "%ObjProto_valueOf%": null, "%PromisePrototype%": null, "%PromiseProto_then%": null, "%Promise_all%": null, "%Promise_reject%": null, "%Promise_resolve%": null, "%RangeErrorPrototype%": null, "%ReferenceErrorPrototype%": null, "%RegExpPrototype%": null, "%SetPrototype%": null, "%SharedArrayBufferPrototype%": null, "%StringPrototype%": null, "%SymbolPrototype%": null, "%SyntaxErrorPrototype%": null, "%TypedArrayPrototype%": null, "%TypeErrorPrototype%": null, "%Uint8ArrayPrototype%": null, "%Uint8ClampedArrayPrototype%": null, "%Uint16ArrayPrototype%": null, "%Uint32ArrayPrototype%": null, "%URIErrorPrototype%": null, "%WeakMapPrototype%": null, "%WeakSetPrototype%": null });
merged1[0] = ["ArrayBuffer", "prototype"];
merged1[1] = ["Array", "prototype"];
merged1[2] = ["Array", "prototype", "entries"];
merged1[3] = ["Array", "prototype", "forEach"];
merged1[4] = ["Array", "prototype", "keys"];
merged1[5] = ["Array", "prototype", "values"];
merged1[6] = ["AsyncFunction", "prototype"];
merged1[7] = ["AsyncGeneratorFunction", "prototype"];
merged1[8] = ["AsyncGeneratorFunction", "prototype", "prototype"];
merged1[9] = ["Boolean", "prototype"];
merged1[10] = ["DataView", "prototype"];
merged1[11] = ["Date", "prototype"];
merged1[12] = ["Error", "prototype"];
merged1[13] = ["EvalError", "prototype"];
merged1[14] = ["Float32Array", "prototype"];
merged1[15] = ["Float64Array", "prototype"];
merged1[16] = ["Function", "prototype"];
merged1[17] = ["GeneratorFunction", "prototype"];
merged1[18] = ["GeneratorFunction", "prototype", "prototype"];
merged1[19] = ["Int8Array", "prototype"];
merged1[20] = ["Int16Array", "prototype"];
merged1[21] = ["Int32Array", "prototype"];
merged1[22] = ["JSON", "parse"];
merged1[23] = ["JSON", "stringify"];
merged1[24] = ["Map", "prototype"];
merged1[25] = ["Number", "prototype"];
merged1[26] = ["Object", "prototype"];
merged1[27] = ["Object", "prototype", "toString"];
merged1[28] = ["Object", "prototype", "valueOf"];
merged1[29] = ["Promise", "prototype"];
merged1[30] = ["Promise", "prototype", "then"];
merged1[31] = ["Promise", "all"];
merged1[32] = ["Promise", "reject"];
merged1[33] = ["Promise", "resolve"];
merged1[34] = ["RangeError", "prototype"];
merged1[35] = ["ReferenceError", "prototype"];
merged1[36] = ["RegExp", "prototype"];
merged1[37] = ["Set", "prototype"];
merged1[38] = ["SharedArrayBuffer", "prototype"];
merged1[39] = ["String", "prototype"];
merged1[40] = ["Symbol", "prototype"];
merged1[41] = ["SyntaxError", "prototype"];
merged1[42] = ["TypedArray", "prototype"];
merged1[43] = ["TypeError", "prototype"];
merged1[44] = ["Uint8Array", "prototype"];
merged1[45] = ["Uint8ClampedArray", "prototype"];
merged1[46] = ["Uint16Array", "prototype"];
merged1[47] = ["Uint32Array", "prototype"];
merged1[48] = ["URIError", "prototype"];
merged1[49] = ["WeakMap", "prototype"];
merged1[50] = ["WeakSet", "prototype"];
const call = bind.call;
let closure_9 = typeof call === "unknown" ? bind(concat) : call(module_1298, concat);
const call2 = bind.call;
let closure_10 = typeof call2 === "unknown" ? bind(splice) : call2(module_1299, splice);
const call3 = bind.call;
let closure_11 = typeof call3 === "unknown" ? bind(replace) : call3(module_1298, replace);
const call4 = bind.call;
let closure_12 = typeof call4 === "unknown" ? bind(slice) : call4(module_1298, slice);
const call5 = bind.call;
let closure_13 = typeof call5 === "unknown" ? bind(exec) : call5(module_1298, exec);
const re14 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
const re15 = /\\(\\)?/g;
function getBaseIntrinsic(arg0, arg1) {

}

export default function GetIntrinsic(str, flag) {
  let tmp46;
  let tmp47;
  if (typeof str === "string") {
    if (0 !== str.length) {
      if (arguments.length > 1) {
        if (typeof flag !== "boolean") {
          const tmp99 = new items(1283)("\"allowMissing\" argument must be a boolean");
          throw tmp99;
        }
      }
      if (null === closure_13(/^%?[^%]*%?$/, str)) {
        const tmp93 = new items(1304)("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        throw tmp93;
      } else {
        const tmp104 = closure_12(str, 0, 1);
        const tmp105 = closure_12(str, -1);
        if ("%" === tmp104) {
          if ("%" !== tmp105) {
            const tmp87 = new items(1304)("invalid intrinsic syntax, expected closing `%`");
            throw tmp87;
          }
        }
        if ("%" === tmp105) {
          if ("%" !== tmp104) {
            const tmp81 = new items(1304)("invalid intrinsic syntax, expected opening `%`");
            throw tmp81;
          }
        }
        items = [];
        closure_11(str, closure_14, (arg0, arg1, arg2, arg3) => {
          if (arg2) {
            let tmp2 = closure_11(arg3, re15, "$1");
          } else {
            tmp2 = arg1;
            if (!arg1) {
              tmp2 = arg0;
            }
          }
          items[items.length] = tmp2;
        });
        str = "";
        if (items.length > 0) {
          str = items[0];
        }
        if (typeof getBaseIntrinsic === "function") {
          const text = `${"%" + str}%`;
          let text1 = text;
          if (items(1315)(merged1, `${"%" + str}%`)) {
            const tmp13 = merged1[`${"%" + str}%`];
            text1 = `${"%" + tmp13[0]}%`;
          }
          if (items(1315)(merged, text1)) {
            if (merged[text1] !== obj) {
              if (undefined === tmp22) {
                if (!flag) {
                  const _HermesInternal2 = HermesInternal;
                  let tmp8Result = tmp8(1283);
                  tmp8Result = new tmp8Result("intrinsic " + text + " exists, but is not available. Please file an issue!");
                  throw tmp8Result;
                }
              }
              if (tmp12) {
                str = tmp12[0];
                closure_10(items, closure_9([0, 1], tmp12));
              }
              flag = true;
              let num = 1;
              let flag2 = false;
              let tmp42 = tmp22;
              let tmp43 = tmp22;
              if (1 < items.length) {
                do {
                  let tmp44 = items[num];
                  tmp46 = closure_12(tmp44, 0, 1);
                  tmp47 = closure_12(tmp44, -1);
                  let flag3 = flag2;
                  if ("\"" !== tmp46) {
                    if ("'" !== tmp46) {
                      if ("`" !== tmp46) {
                        if ("\"" !== tmp47) {
                          let tmp52 = "constructor" !== tmp44 && flag;
                          if (!tmp52) {
                            flag3 = true;
                          }
                          let text2 = `${str}.${tmp44}`;
                          let _HermesInternal3 = HermesInternal;
                          let combined = "%" + text2 + "%";
                          let tmp55 = items;
                          if (items(1315)(merged, combined)) {
                            let tmp59 = merged[combined];
                            let tmp58 = flag;
                          } else {
                            tmp58 = flag;
                            tmp59 = tmp42;
                            if (null != tmp42) {
                              if (tmp44 in tmp42) {
                                if (tmp55(1284)) {
                                  if (num + 1 >= items.length) {
                                    let tmp66 = tmp55(1284)(tmp42, tmp44);
                                    let tmp67 = tmp66;
                                    if (tmp67) {
                                      if ("get" in tmp66) {
                                        if (!("originalValue" in tmp66.get)) {
                                          let get = tmp66.get;
                                        }
                                      }
                                    }
                                    get = tmp42[tmp44];
                                  }
                                }
                                let tmp64 = tmp55(1315)(tmp42, tmp44);
                                let tmp65 = tmp42[tmp44];
                                let tmp70 = tmp64;
                                if (tmp64) {
                                  tmp70 = !flag3;
                                }
                                tmp58 = tmp64;
                                tmp59 = tmp65;
                                if (tmp70) {
                                  merged[combined] = tmp65;
                                  tmp58 = tmp64;
                                  tmp59 = tmp65;
                                }
                              } else if (!flag) {
                                let str19 = "base intrinsic for ";
                                let tmp60 = new.target;
                                let str20 = " exists, but the property is not available.";
                                let tmp61 = new.target;
                                let tmp62 = new tmp55(1283)("base intrinsic for " + str + " exists, but the property is not available.");
                                throw tmp62;
                              }
                            }
                          }
                          num = num + 1;
                          flag = tmp58;
                          tmp42 = tmp59;
                          flag2 = flag3;
                          str = text2;
                          tmp43 = tmp59;
                        }
                      }
                    }
                  }
                } while (tmp46 === tmp47);
                const tmp75 = new items(1304)("property names with quotes must have matching quotes");
                throw tmp75;
              }
              return tmp43;
            } else if (typeof doEval === "function") {
              if ("%AsyncFunction%" === text1) {
                let prototype = getEvalledConstructor("async function () {}");
              } else if ("%GeneratorFunction%" === text1) {
                prototype = getEvalledConstructor("function* () {}");
              } else {
                if ("%AsyncGeneratorFunction%" === text1) {
                  prototype = getEvalledConstructor("async function* () {}");
                } else if ("%AsyncGenerator%" !== text1) {
                  if ("%AsyncIteratorPrototype%" === text1) {
                    const tmp108 = doEval("%AsyncGeneratorFunction%");
                    prototype = undefined;
                    if (tmp108) {
                      prototype = tmp108.prototype;
                    }
                    merged["%AsyncGenerator%"] = prototype;
                    let tmp8Result1 = prototype;
                    if (prototype) {
                      tmp8Result1 = tmp8(1288);
                    }
                    if (tmp8Result1) {
                      prototype = tmp8(1288)(prototype.prototype);
                    }
                  }
                }
                const tmp27 = getEvalledConstructor("async function* () {}");
                merged["%AsyncGeneratorFunction%"] = tmp27;
                if (tmp27) {
                  prototype = tmp27.prototype;
                }
              }
              merged[text1] = prototype;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const _HermesInternal = HermesInternal;
            const tmp8Result21 = new tmp8(1304)("intrinsic " + text + " does not exist!");
            throw tmp8Result21;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  throw new items(1283)("intrinsic name must be a non-empty string");
};