// _runtime/00540_getEvalledConstructor.js
import bind from "bind";
import 00556__ from "metro/00556__.js";
import bind from "bind";
import 00557__ from "metro/00557__.js";
import bind from "bind";
import 00556__ from "metro/00556__.js";
import bind from "bind";
import 00556__ from "metro/00556__.js";
import bind from "bind";
import 00556__ from "metro/00556__.js";

function getEvalledConstructor(arg0) {
  try {
    const _HermesInternal = HermesInternal;
    return Function("\"use strict\"; return (" + arg0 + ").constructor;")();
  } catch (err) {
  }
}
function throwTypeError() {
  throw new require("metro/00541__.js")();
}
if (require("module_542")) {
  throwTypeError = (() => {
    try {
      return throwTypeError;
    } catch (err) {
      try {
        return require("metro/00542__.js")(arguments, "callee").get;
      } catch (err) {
        return throwTypeError;
      }
    }
  })();
}
const tmp5 = require("_Symbol")();
let obj = {};
let tmp6;
if (typeof Uint8Array !== "undefined") {
  if (require("getProto")) {
    let _Uint8Array = Uint8Array;
    tmp6 = require("getProto")(Uint8Array);
  }
}
let AggregateError;
if (typeof globalThis.AggregateError !== "undefined") {
  AggregateError = globalThis.AggregateError;
}
obj = Object.create(null);
obj[0] = AggregateError;
obj[1] = Array;
let _ArrayBuffer;
if (typeof ArrayBuffer !== "undefined") {
  _ArrayBuffer = ArrayBuffer;
}
obj[2] = _ArrayBuffer;
let _moduleResult;
if (tmp5) {
  if (require("getProto")) {
    let items = [];
    let _Symbol = Symbol;
    const _module = require("getProto");
    _moduleResult = _module(items[Symbol.iterator]());
  }
}
obj[3] = _moduleResult;
obj[5] = obj;
obj[6] = obj;
obj[7] = obj;
obj[8] = obj;
let _Atomics;
if (typeof Atomics !== "undefined") {
  _Atomics = Atomics;
}
obj[9] = _Atomics;
let _BigInt;
if (typeof BigInt !== "undefined") {
  _BigInt = BigInt;
}
obj[10] = _BigInt;
let _BigInt64Array;
if (typeof BigInt64Array !== "undefined") {
  _BigInt64Array = BigInt64Array;
}
obj[11] = _BigInt64Array;
let _BigUint64Array;
if (typeof BigUint64Array !== "undefined") {
  _BigUint64Array = BigUint64Array;
}
obj[12] = _BigUint64Array;
obj[13] = Boolean;
let _DataView;
if (typeof DataView !== "undefined") {
  _DataView = DataView;
}
obj[14] = _DataView;
obj[15] = Date;
obj[16] = decodeURI;
obj[17] = decodeURIComponent;
obj[18] = encodeURI;
obj[19] = encodeURIComponent;
obj[20] = require("module_558");
obj[21] = globalThis.eval;
obj[22] = require("module_559");
let Float16Array;
if (typeof globalThis.Float16Array !== "undefined") {
  Float16Array = globalThis.Float16Array;
}
obj[23] = Float16Array;
let _Float32Array;
if (typeof Float32Array !== "undefined") {
  _Float32Array = Float32Array;
}
obj[24] = _Float32Array;
let _Float64Array;
if (typeof Float64Array !== "undefined") {
  _Float64Array = Float64Array;
}
obj[25] = _Float64Array;
let FinalizationRegistry;
if (typeof globalThis.FinalizationRegistry !== "undefined") {
  FinalizationRegistry = globalThis.FinalizationRegistry;
}
obj[26] = FinalizationRegistry;
obj[27] = Function;
obj[28] = obj;
let _Int8Array;
if (typeof Int8Array !== "undefined") {
  _Int8Array = Int8Array;
}
obj[29] = _Int8Array;
let _Int16Array;
if (typeof Int16Array !== "undefined") {
  _Int16Array = Int16Array;
}
obj[30] = _Int16Array;
let _Int32Array;
if (typeof Int32Array !== "undefined") {
  _Int32Array = Int32Array;
}
obj[31] = _Int32Array;
obj[32] = isFinite;
obj[33] = isNaN;
let _module1Result;
if (tmp5) {
  if (require("getProto")) {
    const _module1 = require("getProto");
    const items1 = [];
    const _Symbol2 = Symbol;
    const _module2 = require("getProto");
    _module1Result = _module1(_module2(items1[Symbol.iterator]()));
  }
}
obj[34] = _module1Result;
let _JSON;
if (typeof JSON === "object") {
  _JSON = JSON;
}
obj[35] = _JSON;
let _Map;
if (typeof Map !== "undefined") {
  _Map = Map;
}
obj[36] = _Map;
let _module3Result;
if (typeof Map !== "undefined") {
  if (tmp5) {
    if (require("getProto")) {
      _Map = Map;
      const _module3 = require("getProto");
      const map = new Map();
      const _Symbol3 = Symbol;
      _module3Result = _module3(map[Symbol.iterator]());
    }
  }
}
obj[37] = _module3Result;
obj[38] = Math;
obj[39] = Number;
obj[40] = require("module_549");
obj[41] = require("module_542");
obj[42] = parseFloat;
obj[43] = parseInt;
let _Promise;
if (typeof Promise !== "undefined") {
  _Promise = Promise;
}
obj[44] = _Promise;
let _Proxy;
if (typeof Proxy !== "undefined") {
  _Proxy = Proxy;
}
obj[45] = _Proxy;
obj[46] = require("module_560");
obj[47] = require("module_561");
let _Reflect;
if (typeof Reflect !== "undefined") {
  _Reflect = Reflect;
}
obj[48] = _Reflect;
obj[49] = RegExp;
let _Set;
if (typeof Set !== "undefined") {
  _Set = Set;
}
obj[50] = _Set;
let _module4Result;
if (typeof Set !== "undefined") {
  if (tmp5) {
    if (require("getProto")) {
      _Set = Set;
      const _module4 = require("getProto");
      const set = new Set();
      const _Symbol4 = Symbol;
      _module4Result = _module4(set[Symbol.iterator]());
    }
  }
}
obj[51] = _module4Result;
let _SharedArrayBuffer;
if (typeof SharedArrayBuffer !== "undefined") {
  _SharedArrayBuffer = SharedArrayBuffer;
}
obj[52] = _SharedArrayBuffer;
obj[53] = String;
let _module5Result;
if (tmp5) {
  if (require("getProto")) {
    const _Symbol5 = Symbol;
    const _module5 = require("getProto");
    _module5Result = _module5(""[Symbol.iterator]());
  }
}
obj[54] = _module5Result;
_Symbol = undefined;
if (tmp5) {
  _Symbol = Symbol;
}
obj[55] = _Symbol;
obj[56] = require("module_562");
obj[57] = throwTypeError;
obj[58] = tmp6;
obj[59] = require("module_541");
_Uint8Array = undefined;
if (typeof Uint8Array !== "undefined") {
  _Uint8Array = Uint8Array;
}
obj[60] = _Uint8Array;
let _Uint8ClampedArray;
if (typeof Uint8ClampedArray !== "undefined") {
  _Uint8ClampedArray = Uint8ClampedArray;
}
obj[61] = _Uint8ClampedArray;
let _Uint16Array;
if (typeof Uint16Array !== "undefined") {
  _Uint16Array = Uint16Array;
}
obj[62] = _Uint16Array;
let _Uint32Array;
if (typeof Uint32Array !== "undefined") {
  _Uint32Array = Uint32Array;
}
obj[63] = _Uint32Array;
obj[64] = require("module_563");
let _WeakMap;
if (typeof WeakMap !== "undefined") {
  _WeakMap = WeakMap;
}
obj[65] = _WeakMap;
let _WeakRef;
if (typeof WeakRef !== "undefined") {
  _WeakRef = WeakRef;
}
obj[66] = _WeakRef;
let _WeakSet;
if (typeof WeakSet !== "undefined") {
  _WeakSet = WeakSet;
}
obj[67] = _WeakSet;
obj[68] = require("module_556");
obj[69] = require("module_557");
obj[70] = require("flag");
obj[71] = require("module_548");
obj[72] = require("module_565");
obj[73] = require("module_566");
obj[74] = require("module_567");
obj[75] = require("module_568");
obj[76] = require("module_569");
obj[77] = require("module_570");
obj[78] = require("sign");
obj[79] = require("getPrototypeOf");
if (require("getProto")) {
  try {
    const error = null.error;
  } catch (tmp56) {
    tmp4["%Error.prototype%"] = require("getProto")(require("getProto")(tmp56));
    const tmp3Result = require("getProto");
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
      tmp3 = require("00546_getProto.js") /* getProto */;
    }
    if (tmp3) {
      prototype = require("00546_getProto.js") /* getProto */(tmp12.prototype);
    }
  }
  obj[arg0] = prototype;
  return prototype;
}
obj = Object.create(null);
obj[0] = ["ArrayBuffer", "prototype"];
obj[1] = ["Array", "prototype"];
obj[2] = ["Array", "prototype", "entries"];
obj[3] = ["Array", "prototype", "forEach"];
obj[4] = ["Array", "prototype", "keys"];
obj[5] = ["Array", "prototype", "values"];
obj[6] = ["AsyncFunction", "prototype"];
obj[7] = ["AsyncGeneratorFunction", "prototype"];
obj[8] = ["AsyncGeneratorFunction", "prototype", "prototype"];
obj[9] = ["Boolean", "prototype"];
obj[10] = ["DataView", "prototype"];
obj[11] = ["Date", "prototype"];
obj[12] = ["Error", "prototype"];
obj[13] = ["EvalError", "prototype"];
obj[14] = ["Float32Array", "prototype"];
obj[15] = ["Float64Array", "prototype"];
obj[16] = ["Function", "prototype"];
obj[17] = ["GeneratorFunction", "prototype"];
obj[18] = ["GeneratorFunction", "prototype", "prototype"];
obj[19] = ["Int8Array", "prototype"];
obj[20] = ["Int16Array", "prototype"];
obj[21] = ["Int32Array", "prototype"];
obj[22] = ["JSON", "parse"];
obj[23] = ["JSON", "stringify"];
obj[24] = ["Map", "prototype"];
obj[25] = ["Number", "prototype"];
obj[26] = ["Object", "prototype"];
obj[27] = ["Object", "prototype", "toString"];
obj[28] = ["Object", "prototype", "valueOf"];
obj[29] = ["Promise", "prototype"];
obj[30] = ["Promise", "prototype", "then"];
obj[31] = ["Promise", "all"];
obj[32] = ["Promise", "reject"];
obj[33] = ["Promise", "resolve"];
obj[34] = ["RangeError", "prototype"];
obj[35] = ["ReferenceError", "prototype"];
obj[36] = ["RegExp", "prototype"];
obj[37] = ["Set", "prototype"];
obj[38] = ["SharedArrayBuffer", "prototype"];
obj[39] = ["String", "prototype"];
obj[40] = ["Symbol", "prototype"];
obj[41] = ["SyntaxError", "prototype"];
obj[42] = ["TypedArray", "prototype"];
obj[43] = ["TypeError", "prototype"];
obj[44] = ["Uint8Array", "prototype"];
obj[45] = ["Uint8ClampedArray", "prototype"];
obj[46] = ["Uint16Array", "prototype"];
obj[47] = ["Uint32Array", "prototype"];
obj[48] = ["URIError", "prototype"];
obj[49] = ["WeakMap", "prototype"];
obj[50] = ["WeakSet", "prototype"];
const call = bind.call;
let closure_9 = typeof call === "unknown" ? bind(concat) : call(module_556, concat);
const call2 = bind.call;
let closure_10 = typeof call2 === "unknown" ? bind(splice) : call2(module_557, splice);
const call3 = bind.call;
let closure_11 = typeof call3 === "unknown" ? bind(replace) : call3(module_556, replace);
const call4 = bind.call;
let closure_12 = typeof call4 === "unknown" ? bind(slice) : call4(module_556, slice);
const call5 = bind.call;
let closure_13 = typeof call5 === "unknown" ? bind(exec) : call5(module_556, exec);
const re14 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
const re15 = /\\(\\)?/g;
function getBaseIntrinsic(arg0, arg1) {

}

export default function GetIntrinsic(str, flag) {
  let tmp47;
  let tmp48;
  if (typeof str === "string") {
    if (0 !== str.length) {
      let throwTypeErrorResult = flag;
      if (arguments.length > 1) {
        if (typeof flag !== "boolean") {
          throwTypeErrorResult = new items(541)("\"allowMissing\" argument must be a boolean");
          throw throwTypeErrorResult;
        }
      }
      throwTypeErrorResult = callback5;
      if (null === callback5(/^%?[^%]*%?$/, str)) {
        const tmp94 = new items(562)("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        throw tmp94;
      } else {
        throwTypeErrorResult = callback4;
        throwTypeErrorResult = callback4(str, 0, 1);
        throwTypeErrorResult = callback4(str, -1);
        if ("%" === throwTypeErrorResult) {
          if ("%" !== throwTypeErrorResult) {
            const tmp88 = new items(562)("invalid intrinsic syntax, expected closing `%`");
            throw tmp88;
          }
        }
        if ("%" === throwTypeErrorResult) {
          if ("%" !== throwTypeErrorResult) {
            const tmp82 = new items(562)("invalid intrinsic syntax, expected opening `%`");
            throw tmp82;
          }
        }
        items = [];
        callback3(str, closure_14, (arg0, arg1, arg2, arg3) => {
          if (arg2) {
            let tmp2 = outer1_11(arg3, outer1_15, "$1");
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
        const text = `%${str}`;
        if (typeof getBaseIntrinsic !== "function") {
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        const text1 = `${tmp7}%`;
        let text2 = text1;
        if (items(573)(obj, `${tmp7}%`)) {
          const tmp14 = tmp11[`${tmp7}%`];
          text2 = `${"%" + tmp14[0]}%`;
        }
        if (items(573)(obj, text2)) {
          if (tmp15[text2] !== obj) {
            if (undefined === tmp23) {
              if (!flag) {
                const _HermesInternal2 = HermesInternal;
                let tmp9Result = tmp9(541);
                tmp9Result = new tmp9Result("intrinsic " + text1 + " exists, but is not available. Please file an issue!");
                throw tmp9Result;
              }
            }
            if (tmp13) {
              str = tmp13[0];
              callback2(items, callback([0, 1], tmp13));
            }
            flag = true;
            let num = 1;
            let flag2 = false;
            let tmp43 = tmp23;
            let tmp44 = tmp23;
            if (1 < items.length) {
              do {
                let tmp45 = items[num];
                let tmp46 = callback4;
                tmp47 = callback4(tmp45, 0, 1);
                tmp48 = callback4(tmp45, -1);
                let tmp49 = flag;
                let tmp50 = num;
                let flag3 = flag2;
                let tmp51 = tmp43;
                let tmp52 = str;
                if ("\"" !== tmp47) {
                  if ("'" !== tmp47) {
                    if ("`" !== tmp47) {
                      if ("\"" !== tmp48) {
                        let tmp53 = "constructor" !== tmp45 && flag;
                        if (!tmp53) {
                          flag3 = true;
                        }
                        let text3 = `${str}.${tmp45}`;
                        let _HermesInternal3 = HermesInternal;
                        let combined = "%" + text3 + "%";
                        let tmp56 = items;
                        let tmp57 = dependencyMap;
                        let tmp58 = obj;
                        if (items(573)(obj, combined)) {
                          let tmp60 = tmp58[combined];
                          let tmp59 = flag;
                        } else {
                          tmp59 = flag;
                          tmp60 = tmp43;
                          if (null != tmp43) {
                            if (tmp45 in tmp43) {
                              if (tmp56(542)) {
                                if (num + 1 >= items.length) {
                                  let tmp67 = tmp56(542)(tmp43, tmp45);
                                  let tmp68 = tmp67;
                                  if (tmp68) {
                                    if ("get" in tmp67) {
                                      if (!("originalValue" in tmp67.get)) {
                                        let get = tmp67.get;
                                      }
                                      let tmp69 = get;
                                      let tmp70 = tmp68;
                                    }
                                  }
                                  get = tmp43[tmp45];
                                }
                              }
                              let tmp65 = tmp56(573)(tmp43, tmp45);
                              let tmp66 = tmp43[tmp45];
                              let tmp71 = tmp65;
                              if (tmp65) {
                                tmp71 = !flag3;
                              }
                              tmp59 = tmp65;
                              tmp60 = tmp66;
                              if (tmp71) {
                                tmp58[combined] = tmp66;
                                tmp59 = tmp65;
                                tmp60 = tmp66;
                              }
                            } else if (!flag) {
                              let str19 = "base intrinsic for ";
                              let tmp61 = new.target;
                              let str20 = " exists, but the property is not available.";
                              let tmp62 = new.target;
                              let tmp63 = new tmp56(541)("base intrinsic for " + str + " exists, but the property is not available.");
                              let tmp64 = tmp63;
                              throw tmp63;
                            }
                          }
                        }
                        num = num + 1;
                        flag = tmp59;
                        tmp43 = tmp60;
                        flag2 = flag3;
                        str = text3;
                        tmp44 = tmp60;
                      }
                    }
                  }
                }
              } while (tmp47 === tmp48);
              const tmp76 = new items(562)("property names with quotes must have matching quotes");
              throw tmp76;
            }
            return tmp44;
          } else {
            throwTypeErrorResult = doEval;
            if (typeof doEval !== "function") {
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            if ("%AsyncFunction%" === text2) {
              let prototype = getEvalledConstructor("async function () {}");
            } else if ("%GeneratorFunction%" === text2) {
              prototype = getEvalledConstructor("function* () {}");
            } else {
              if ("%AsyncGeneratorFunction%" === text2) {
                prototype = getEvalledConstructor("async function* () {}");
              } else if ("%AsyncGenerator%" !== text2) {
                if ("%AsyncIteratorPrototype%" === text2) {
                  throwTypeErrorResult = doEval;
                  throwTypeErrorResult = doEval("%AsyncGeneratorFunction%");
                  prototype = undefined;
                  if (throwTypeErrorResult) {
                    prototype = throwTypeErrorResult.prototype;
                  }
                  tmp15["%AsyncGenerator%"] = prototype;
                  let tmp9Result1 = prototype;
                  if (prototype) {
                    tmp9Result1 = tmp9(546);
                  }
                  if (tmp9Result1) {
                    prototype = tmp9(546)(prototype.prototype);
                  }
                }
              }
              const tmp28 = getEvalledConstructor("async function* () {}");
              tmp15["%AsyncGeneratorFunction%"] = tmp28;
              if (tmp28) {
                prototype = tmp28.prototype;
              }
            }
            tmp15[text2] = prototype;
          }
        } else {
          const _HermesInternal = HermesInternal;
          const tmp9Result21 = new tmp9(562)("intrinsic " + text1 + " does not exist!");
          throw tmp9Result21;
        }
        tmp11 = obj;
      }
    }
  }
  throwTypeErrorResult = new items(541)("intrinsic name must be a non-empty string");
  throw throwTypeErrorResult;
};